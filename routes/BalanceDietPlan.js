// dietPlanRoutes.js

const express = require('express');
const { getDietPlans } = require('../controllers/BalanceDietPlan');

const router = express.Router();

// Route to get all diet plans
router.get('/diet-plans', getDietPlans);

module.exports = router;
