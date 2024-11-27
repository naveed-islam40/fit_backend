const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  jobTitle: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  image: {
    type: String, // URL to the image
    required: false
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Testimonial = mongoose.model('Testimonial', TestimonialSchema);
module.exports = Testimonial;
