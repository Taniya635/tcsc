const mongoose= require("mongoose");

mongoose.connect('mongodb://localhost:27017/tcsc')

mongoose.connection.on('connected', () => {
  console.log('MongoDB is running and connected successfully');
});

module.exports = mongoose.connection;
