const Performance = require('../models/Performance');

// Create a new performance record
exports.createPerformance = async (req, res) => {
  const data = req.body
  try {
    const currentTime =  new Date();
    const last24Hours = new Date(currentTime.getTime() - 24 * 60 * 60 * 1000);


    const isPerformanceCreated = await Performance.find({userId: req.body.userId, createdAt: {$gte: last24Hours}});

    console.log(isPerformanceCreated)

    // if(isPerformanceCreated.length > 0) {
    //     return res.status(400).json({ message: 'You can only create 1 performance records per 24 hours.' });
    // }

    const performance = new Performance(req.body);
    const savedPerformance = await performance.save();
    res.status(201).json(savedPerformance);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all performance records
exports.getAllPerformances = async (req, res) => {
  try {
    const performances = await Performance.find(
        {
            _id: req.body.userId,
        }
    );
    res.status(200).json(performances);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single performance record by ID
exports.getPerformanceById = async (req, res) => {
  try {
    const performance = await Performance.findById(req.params.id);
    
    if (!performance) {
      return res.status(404).json({ message: 'Performance record not found' });
    }
    res.status(200).json(performance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a performance record by ID
exports.updatePerformanceById = async (req, res) => {
  try {
    const performance = await Performance.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!performance) {
      return res.status(404).json({ message: 'Performance record not found' });
    }
    res.status(200).json(performance);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a performance record by ID
exports.deletePerformanceById = async (req, res) => {
  try {
    const performance = await Performance.findByIdAndDelete(req.params.id);
    if (!performance) {
      return res.status(404).json({ message: 'Performance record not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPerformanceData = async (req, res) => {
  console.log("hello")
  const { userId } = req.params;
  const page = parseInt(req.query.page) || 1;
  const limit = 10; // Number of records per page
  const skip = (page - 1) * limit;

  try {
      // Fetch the results based on userId with pagination
      const results = await Performance.find({ userId })
          .skip(skip)
          .limit(limit);
      
      // Count the total documents for pagination
      const totalDocuments = await Performance.countDocuments({ userId });
      const totalPages = Math.ceil(totalDocuments / limit);

      // Respond with the fetched results and total pages
      res.json({
          results,
          totalPages,
      });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
  }
};

exports.last7days = async (req, res) => {
  const { userId } = req.params;

  // Get the current date and the date 7 days ago
  const today = new Date();
  const lastWeek = new Date();
  lastWeek.setDate(today.getDate() - 7);

  try {
      // Fetch the results based on userId for the last 7 days
      const results = await Performance.find({
          userId,
          createdAt: { $gte: lastWeek, $lte: today } // Filter by date range
      });

      // Respond with the fetched results
      res.json({
          results,
      });
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
  }
};