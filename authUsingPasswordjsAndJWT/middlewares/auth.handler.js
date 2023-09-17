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

function checkRoles(...roles) {
  return (req, res, next) => {
    const user = req.user;
    if (roles.includes(user.role)) {
      next();
    } else {
      boom.unauthorized();
    }
  };
}

module.exports = { checkApiKey, checkRoles };
