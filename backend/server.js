// test.js
const { configureExpress } = require("./src/config/setup/express");
const { initializeServer } = require("./src/config/setup/setup");

// Get the configured Express application
const app = configureExpress();

// Initialize and start the server
const server = initializeServer(app);

module.exports = server;