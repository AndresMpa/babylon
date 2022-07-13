const router = require('express').Router();

const categoriesRouter = require('./categories.router');
const productsRouter = require('./products.router');
const usersRouter = require('./users.router');
const baseRouter = require('./base.router');

function routerApi(app) {
  // Over writting efault base path
  app.use('/api/v1', router);

  // Base path routes
  router.use('/categories', categoriesRouter);
  router.use('/products', productsRouter);
  router.use('/users', usersRouter);
  router.use('/', baseRouter);
}

module.exports = routerApi;
