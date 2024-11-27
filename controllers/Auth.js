const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const User = require('../models/Auth');  // Ensure the correct model name

// Registration controller
const register = async (req, res) => {
    const { username, email, password, confirmPassword, role } = req.body;

    // Validate password and confirm password match
    if (password !== confirmPassword) {
        return res.status(400).json({ msg: "Passwords do not match" });
    }

    try {
        // Check if user already exists by email
        const existingUserByEmail = await User.findOne({ email });
        if (existingUserByEmail) {
            return res.status(400).json({ msg: "User already exists with this email" });
        }

        // Check if user already exists by username
        const existingUserByUsername = await User.findOne({ username });
        if (existingUserByUsername) {
            return res.status(400).json({ msg: "User already exists with this username" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            role
        });

        await newUser.save();

        res.status(201).json({
            success: true,
            newUser
        });
    } catch (error) {
        console.error("Registration Error:", error);
        res.status(500).json({ msg: "Server error" });
    }
};

// Login controller
const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find user by username
        const userData = await User.findOne({ username });
        if (!userData) {
            return res.status(400).json({ msg: "Invalid username or password" });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, userData.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Invalid username or password" });
        }
        console.log(userData);
        res.status(200).json({
            success: true,
            userData
        });
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ msg: "Server error" });
    }
};

// Send reset password email
const forgotPassword = async (req, res) => {
    const { email } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: "Email not found" });
        }

        // Create a password reset token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        // Create a reset URL
        const resetUrl = `http://localhost:3000/reset-password/${token}`;  // Use dynamic token here
        // Ensure this URL points to your Next.js route

        // Send the email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS, // Your email app password or OAuth2 credentials
            },
        });

        // Define the HTML content for the email with a clickable reset button
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Password Reset Request",
            html: `
                <h2>Password Reset Request</h2>
                <p>You have requested to reset your password. Please click the button below to reset it.</p>
                <a href="${resetUrl}" style="display: inline-block; padding: 10px 20px; background-color:#E09145; color: white; text-decoration: none; border-radius: 5px; text-align: center;">
                    Reset Password
                </a>
                <p>If you did not request this, please ignore this email.</p>
            `,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        res.status(200).json({ success: true, msg: "Password reset link sent to your email." });
    } catch (error) {
        console.error("Forgot Password Error:", error);
        res.status(500).json({ msg: "Server error" });
    }
};

// Reset password handler
const resetPassword = async (req, res) => {
    const { token, password } = req.body;

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id;

        // Find the user by ID
        const user = await User.findById(userId);
        if (!user) {
            return res.status(400).json({ msg: "User not found." });
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Update the password
        user.password = hashedPassword;
        await user.save();

        res.status(200).json({ success: true, msg: "Password has been reset successfully." });
    } catch (error) {
        console.error("Reset Password Error:", error);
        res.status(500).json({ msg: "Server error" });
    }
};



module.exports = {
    register,
    login,
    forgotPassword,
    resetPassword,
};
