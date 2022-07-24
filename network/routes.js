const messageComponent = require('../components/message/network');
const chatComponent = require('../components/chat/network');
const userComponent = require('../components/user/network');

const router = require('express').Router();

function endpoint(app) {
  app.use(router);

  // Router paths
  router.use('/message', messageComponent);
  router.use('/chat', chatComponent);
  router.use('/user', userComponent);
}

module.exports = endpoint;
