const express = require('express');
const { getWorkoutData } = require('../controllers/absWorkout'); // Make sure this is pointing to the correct controller
const router = express.Router();

router.get('/abs-workouts', getWorkoutData);

module.exports = router;
