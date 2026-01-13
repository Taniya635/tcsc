const pagesRouter = require('./pages.routes');
const serviceRouter=require('./services.routes');
const apiRouter=require('./api.routes');
const feedbackRoutes = require('./feedback.routes');

function allRoutes(app) {
  app.use('/pages',pagesRouter);
  app.use('/services',serviceRouter);
  app.use('/api',apiRouter);
  app.use('/api',feedbackRoutes);
}

module.exports = allRoutes;
