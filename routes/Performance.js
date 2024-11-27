//routes performance.js
const express = require('express');
const router = express.Router();
const performanceController = require('../controllers/Performance');

// Create a new performance record
router.post('/performances', performanceController.createPerformance);

// Get all performance records for a specific user
router.post('/performances/user', performanceController.getAllPerformances);

// Get a single performance record by ID
router.get('/performance/:id', performanceController.getPerformanceById);

// Update a performance record by ID
router.put('/performance/:id', performanceController.updatePerformanceById);

// Delete a performance record by ID
router.delete('/performances/:userId', performanceController.deletePerformanceById);

router.get('/performances/:userId/data', performanceController.getPerformanceData);

router.get('/report/:userId/last7days', performanceController.last7days);

module.exports = router;