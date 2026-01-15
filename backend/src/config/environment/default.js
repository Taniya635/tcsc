module.exports = {
  port: process.env.PORT || 4000,
  nodeEnv: process.env.NODE_ENV || 'development',
  mongoURI: process.env.MONGODB_URI || 'mongodb://localhost:27017/tcsc'
};
