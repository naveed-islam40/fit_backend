const { getWeightLossWorkouts } = require('../models/weightloss');

const getAllWeightLossWorkouts = (req, res) => {
  try {
    const workouts = getWeightLossWorkouts();
    res.status(200).json(workouts);
  } catch (error) {
    console.error('Error fetching weight loss workouts:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  getAllWeightLossWorkouts,
};
