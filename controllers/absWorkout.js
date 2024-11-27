const { absData } = require('../models/absWorkout');

const getWorkoutData = (req, res) => {
  try {
    const workouts = absData(); // Ensure this fetches the correct abs data
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getWorkoutData };

