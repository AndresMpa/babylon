const jwt = require("jsonwebtoken");

function sign(data) {
  return jwt.sign(data, "secretOrPrivateKey");
}

function validate(token) {
  return jwt.verify(token, "secretOrPublicKey");
}

module.exports = {
  validate,
  sign,
};
