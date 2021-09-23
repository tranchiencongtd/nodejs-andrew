const siteRouter = require('./site');

module.exports = (app) => {
  app.use('/', siteRouter);
};
