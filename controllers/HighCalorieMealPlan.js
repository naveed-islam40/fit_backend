// controllers/mealPlanController.js
const mealPlans = require('../models/HighCalorieMealPlan');

// Controller to handle fetching meal plans
const getMealPlans = (req, res) => {
  res.status(200).json(mealPlans);
};

module.exports = { getMealPlans };
