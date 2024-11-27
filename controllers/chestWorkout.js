// controllers/chestWorkout.js
const { getWorkouts } = require('../models/chestWorkout');

const getWorkoutData = (req, res) => {
  try {
    const workouts = getWorkouts();
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getWorkoutData };
