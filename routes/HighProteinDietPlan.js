// routes/dietPlanRoutes.js
const express = require('express');
const { getDietPlans } = require('../controllers//HighProteinDietPlan');

const router = express.Router();

// Define the route for getting diet plans
router.get('/diet-plans', getDietPlans);

module.exports = router;
