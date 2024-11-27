// dietPlanController.js

const DietPlan = require('../models/BalanceDietPlan');

// Get all diet plans
const getDietPlans = async (req, res) => {
  try {
    const dietPlans = await DietPlan.find();
    res.status(200).json(dietPlans);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching diet plans', error });
  }
};

module.exports = {
  getDietPlans,
};
