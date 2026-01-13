const config = require('../environment/default');
require('../db/db');

const initializeServer = (app) => {
  const server = app.listen(config.port, () => {
    console.log(`Running on ${config.port}`);
  });

  return server;
};

module.exports = { initializeServer };
