// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectdb = require('./database/connect');
const authRouter = require('./routes/Auth');
const contactRouter = require('./routes/contactus');
const testimonialRouter = require('./routes/testimonials');
const performanceRouter = require('./routes/Performance'); 
const chestWorkoutRouter = require('./routes/chestWorkout');
const weightLossWorkoutsRouter = require('./routes/weightloss'); 
const absWorkoutRoute = require('./routes/absWorkout');
const highCalorieMealPlanRouter = require('./routes/HighCalorieMealPlan');
const mealPlanRouter = require('./routes/HighCalorieMealPlan');
const protienPlan = require('./routes/HighProteinDietPlan')
// const mealPlanRoutes = require('./routes/HighProteinDietPlan');

const app = express();
const port = process.env.PORT || 5000;

connectdb();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use('/', authRouter);
app.use('/api', contactRouter);
app.use('/api', testimonialRouter);
app.use('/api', performanceRouter); // Add performance routes
app.use('/api', chestWorkoutRouter);
app.use('/api', weightLossWorkoutsRouter);
app.use('/api', absWorkoutRoute);
app.use('/api', highCalorieMealPlanRouter);
app.use('/api', mealPlanRouter);
app.use('/api', protienPlan);
// app.use('/api', mealPlanRoutes);


// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

