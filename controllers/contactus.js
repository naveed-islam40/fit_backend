require('dotenv').config();

const nodemailer = require('nodemailer');

const Contact = require('../models/contactus');

const submitContact = async (req, res) => {
  try {
    const { fullname, email, message } = req.body;

    // Store the form data in the database
    const newContact = new Contact({
      fullname,
      email,
      message
    });
   
    await newContact.save();

    // Configure Nodemailer with environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Gmail SMTP
      auth: {
        user: process.env.EMAIL_USER, // Use environment variable for email
        pass: process.env.EMAIL_PASS  // Use environment variable for email password
      }
    });

    // Mail options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'fitntone3@gmail.com', 
      subject: `New Contact Form Submission from ${fullname}`,
      text: `You have received a new message from ${fullname} (${email}):\n\nMessage: ${message}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending email:', error);
        return res.status(500).json({ success: false, message: 'Failed to send email' });
      } else {
        console.log('Email sent:', info.response);
      }
    });

    // Send response to the client
    res.status(201).json({ 
      success: true,
      message: 'Contact submitted successfully and email sent!'
    });
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({
      success: false, 
      message: 'Server error'
    });
  }
};

module.exports = {
  submitContact
};
