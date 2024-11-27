// controllers/dietPlanController.js
const dietPlans = require('../models/HighProteinDietPlan');

const getDietPlans = (req, res) => {
  res.json(dietPlans);
};

module.exports = { getDietPlans };
