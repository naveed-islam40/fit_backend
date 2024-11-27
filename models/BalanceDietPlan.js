const mongoose = require('mongoose');

const mealSchema = [
    {
      day: "Day 1",
      meals: [
        { meal: "Breakfast", details: "Whole grain cereal with milk and sliced banana", calories: 600 },
        { meal: "Snack", details: "Apple slices with almond butter", calories: 300 },
        { meal: "Lunch", details: "Lentil soup with a side of mixed greens salad", calories: 700 },
        { meal: "Snack", details: "Whole grain toast with avocado", calories: 350 },
        { meal: "Dinner", details: "Baked chicken with a side of brown rice and steamed vegetables", calories: 750 },
        { meal: "Snack", details: "Fresh fruit salad", calories: 250 },
      ]
    },
    {
      day: "Day 2",
      meals: [
        { meal: "Breakfast", details: "Greek yogurt parfait with granola and berries", calories: 600 },
        { meal: "Snack", details: "Carrot sticks with hummus", calories: 300 },
        { meal: "Lunch", details: "Turkey and cheese sandwich on whole grain bread with a side salad", calories: 700 },
        { meal: "Snack", details: "Smoothie with milk, protein powder, and fruits", calories: 350 },
        { meal: "Dinner", details: "Grilled fish tacos with black beans and corn", calories: 750 },
        { meal: "Snack", details: "Cottage cheese with fresh fruit", calories: 250 },
      ]
    },
    // Repeat similar objects for Day 3 to Day 7 with the same meal details
    {
      day: "Day 3",
      meals: [
        { meal: "Breakfast", details: "Whole grain cereal with milk and sliced banana", calories: 600 },
        { meal: "Snack", details: "Apple slices with almond butter", calories: 300 },
        { meal: "Lunch", details: "Lentil soup with a side of mixed greens salad", calories: 700 },
        { meal: "Snack", details: "Whole grain toast with avocado", calories: 350 },
        { meal: "Dinner", details: "Baked chicken with a side of brown rice and steamed vegetables", calories: 750 },
        { meal: "Snack", details: "Fresh fruit salad", calories: 250 },
      ]
    },
    {
      day: "Day 4",
      meals: [
        { meal: "Breakfast", details: "Greek yogurt parfait with granola and berries", calories: 600 },
        { meal: "Snack", details: "Carrot sticks with hummus", calories: 300 },
        { meal: "Lunch", details: "Turkey and cheese sandwich on whole grain bread with a side salad", calories: 700 },
        { meal: "Snack", details: "Smoothie with milk, protein powder, and fruits", calories: 350 },
        { meal: "Dinner", details: "Grilled fish tacos with black beans and corn", calories: 750 },
        { meal: "Snack", details: "Cottage cheese with fresh fruit", calories: 250 },
      ]
    },
    {
      day: "Day 5",
      meals: [
        { meal: "Breakfast", details: "Whole grain cereal with milk and sliced banana", calories: 600 },
        { meal: "Snack", details: "Apple slices with almond butter", calories: 300 },
        { meal: "Lunch", details: "Lentil soup with a side of mixed greens salad", calories: 700 },
        { meal: "Snack", details: "Whole grain toast with avocado", calories: 350 },
        { meal: "Dinner", details: "Baked chicken with a side of brown rice and steamed vegetables", calories: 750 },
        { meal: "Snack", details: "Fresh fruit salad", calories: 250 },
      ]
    },
    {
      day: "Day 6",
      meals: [
        { meal: "Breakfast", details: "Greek yogurt parfait with granola and berries", calories: 600 },
        { meal: "Snack", details: "Carrot sticks with hummus", calories: 300 },
        { meal: "Lunch", details: "Turkey and cheese sandwich on whole grain bread with a side salad", calories: 700 },
        { meal: "Snack", details: "Smoothie with milk, protein powder, and fruits", calories: 350 },
        { meal: "Dinner", details: "Grilled fish tacos with black beans and corn", calories: 750 },
        { meal: "Snack", details: "Cottage cheese with fresh fruit", calories: 250 },
      ]
    },
    {
      day: "Day 7",
      meals: [
        { meal: "Breakfast", details: "Whole grain cereal with milk and sliced banana", calories: 600 },
        { meal: "Snack", details: "Apple slices with almond butter", calories: 300 },
        { meal: "Lunch", details: "Lentil soup with a side of mixed greens salad", calories: 700 },
        { meal: "Snack", details: "Whole grain toast with avocado", calories: 350 },
        { meal: "Dinner", details: "Baked chicken with a side of brown rice and steamed vegetables", calories: 750 },
        { meal: "Snack", details: "Fresh fruit salad", calories: 250 },
      ]
    }
  ];

const DietPlan = mongoose.model('DietPlan', dietPlanSchema);

module.exports = DietPlan;