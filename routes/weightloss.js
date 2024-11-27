const express = require('express');
const router = express.Router();
const { getAllWeightLossWorkouts } = require('../controllers/weightloss');

// Define the route for fetching weight loss workouts
router.get('/weightloss-workouts', getAllWeightLossWorkouts); // No need for '/api'

module.exports = router;
