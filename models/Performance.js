const mongoose = require('mongoose');

const PerformanceSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  calories: {
    type: Number,
    required: true
  },
  workoutHours: {
    type: Number,
    required: true,
  },
  sleep: {
    type: Number,
    required: true,
  },
  waterIntake: { // New field for water intake
    type: Number,
    required: true, // Set to false if not always required
  },
  score: {
    type: Number,
    required: true,
  },
  weightGain: {
    type: Number,
    required: true,
  },
}, {
    timestamps: true,
});

module.exports = mongoose.model('performance', PerformanceSchema);
