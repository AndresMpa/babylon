const boom = require('@hapi/boom');

const { config } = require('../config/config');

function checkApiKey(req, res, next) {
  const apiKey = req.headers['api'];
  if (apiKey !== config.apiKey) {
    next(boom.unauthorized());
  } else {
    next();
  }
}

module.exports = { checkApiKey };
