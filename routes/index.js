const router = require('express').Router();

const categoriesRouter = require('./categories.router');
const customersRouter = require('./customers.router');
const productsRouter = require('./products.router');
const ordersRouter = require('./orders.router');
const usersRouter = require('./users.router');

function routerApi(app) {
  // Over writting efault base path
  app.use('/api/v1', router);

  // Base path routes
  router.use('/categories', categoriesRouter);
  router.use('/customers', customersRouter);
  router.use('/products', productsRouter);
  router.use('/orders', ordersRouter);
  router.use('/users', usersRouter);
}

module.exports = routerApi;
