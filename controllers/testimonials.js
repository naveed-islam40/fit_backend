const Testimonial = require('../models/testimonials');

// Controller to handle the creation of a testimonial
const createTestimonial = async (req, res) => {
  try {
    const { name, jobTitle, message, image, rating } = req.body;

    const newTestimonial = new Testimonial({
      name,
      jobTitle,
      message,
      image,
      rating
    });

    await newTestimonial.save();

    res.status(201).json({
      success: true,
      message: 'Testimonial created successfully',
      testimonial: newTestimonial
    });
  } catch (error) {
    console.error('Error creating testimonial:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Controller to get all testimonials
const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();
    res.status(200).json({
      success: true,
      testimonials
    });
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Controller to get a specific testimonial by ID
const getTestimonialById = async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);
    if (!testimonial) {
      return res.status(404).json({ success: false, message: 'Testimonial not found' });
    }

    res.status(200).json({
      success: true,
      testimonial
    });
  } catch (error) {
    console.error('Error fetching testimonial:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Controller to update a testimonial by ID
const updateTestimonial = async (req, res) => {
  try {
    const { name, jobTitle, message, image, rating } = req.body;

    const updatedTestimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      { name, jobTitle, message, image, rating },
      { new: true }
    );

    if (!updatedTestimonial) {
      return res.status(404).json({ success: false, message: 'Testimonial not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Testimonial updated successfully',
      testimonial: updatedTestimonial
    });
  } catch (error) {
    console.error('Error updating testimonial:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// Controller to delete a testimonial by ID
const deleteTestimonial = async (req, res) => {
  try {
    const deletedTestimonial = await Testimonial.findByIdAndDelete(req.params.id);

    if (!deletedTestimonial) {
      return res.status(404).json({ success: false, message: 'Testimonial not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Testimonial deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting testimonial:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

module.exports = {
  createTestimonial,
  getTestimonials,
  getTestimonialById,
  updateTestimonial,
  deleteTestimonial
};
