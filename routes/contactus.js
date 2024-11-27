// routes/contactus.js
const express = require('express');
const router = express.Router();
const { submitContact } = require('../controllers/contactus'); // Adjust path if needed

// Define route for contact submission
router.post('/submit', submitContact);

module.exports = router;

