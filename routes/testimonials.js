const express = require('express');
const router = express.Router();
const { createTestimonial, getTestimonials } = require('../controllers/testimonials'); // Import the controller

// POST route for creating a testimonial
router.post('/testimonials', createTestimonial);
router.get('/alltestimonials', getTestimonials);

module.exports = router;

