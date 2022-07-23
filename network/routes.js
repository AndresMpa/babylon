const messageComponent = require('../components/message/network');

const router = require('express').Router();

function endpoint(app) {
  app.use(router)

  // Router paths
  router.use('/message', messageComponent);
}

module.exports = endpoint;
