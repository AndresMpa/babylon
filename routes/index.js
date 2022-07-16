const router = require('express').Router();

const categoriesRouter = require('./categories.router');
const customersRouter = require('./customers.router');
const productsRouter = require('./products.router');
const ordersRouter = require('./orders.router');
const usersRouter = require('./users.router');
const baseRouter = require('./base.router');
const authRouter = require('./auth.router');

function routerApi(app) {
  // Over writting efault base path
  app.use('/api/v1', router);

  // Base path routes
  router.use('/categories', categoriesRouter);
  router.use('/customers', customersRouter);
  router.use('/products', productsRouter);
  router.use('/orders', ordersRouter);
  router.use('/users', usersRouter);
  router.use('/auth', authRouter);
  router.use('/', baseRouter);
}

module.exports = routerApi;
