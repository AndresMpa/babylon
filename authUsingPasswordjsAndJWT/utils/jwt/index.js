const jwt = require('jsonwebtoken');
const { config } = require('./../../config/config');

const JWT_SECRET = config.jwtSecret;

const jwtConfig = {
  expiresIn: '7d',
};

function signToken(payload) {
  return jwt.sign(payload, JWT_SECRET, jwtConfig);
}

function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

module.exports = {
  signToken,
  verifyToken,
};
