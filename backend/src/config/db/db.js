const mongoose = require("mongoose");
const config = require('../environment/default');

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoURI, {
      // These options are no longer needed in Mongoose 6+, but included for compatibility
    });
    console.log(`MongoDB connected successfully to: ${mongoose.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

// Connect to MongoDB
connectDB();

// Connection event listeners
mongoose.connection.on('connected', () => {
  console.log('MongoDB is running and connected successfully');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

module.exports = mongoose.connection;