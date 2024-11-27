// routes/mealPlanRoutes.js
const express = require('express');
const { getMealPlans } = require('../controllers/HighCalorieMealPlan');

const router = express.Router();

// Route to get meal plans
router.get('/mealPlans', getMealPlans);

module.exports = router;
