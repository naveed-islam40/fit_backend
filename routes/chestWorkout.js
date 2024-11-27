// routes/chestWorkout.js
const express = require('express');
const { getWorkoutData } = require('../controllers/chestWorkout');
const router = express.Router();

router.get('/workouts', getWorkoutData);

module.exports = router;
