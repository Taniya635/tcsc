const pagesRouter = require('./pages.routes');
const serviceRouter=require('./services.routes');
const apiRouter=require('./api.routes');
const feedbackRoutes = require('./feedback.routes');
const workerRoutes = require('./worker.routes');
const userRoutes = require('./user.routes');

function allRoutes(app) {
  app.use('/pages',pagesRouter);
  app.use('/services',serviceRouter);
  app.use('/api',apiRouter);
  app.use('/api',feedbackRoutes);
  app.use('/api/worker', workerRoutes);
  app.use('/api/user', userRoutes);
}

module.exports = allRoutes;
