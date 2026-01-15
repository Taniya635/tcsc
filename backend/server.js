require('dotenv').config();

const { configureExpress } = require("./src/config/setup/express");
const { initializeServer } = require("./src/config/setup/setup");


const app = configureExpress();


if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  initializeServer(app);
}


module.exports = app;