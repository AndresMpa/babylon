const errorGenerator = require("../utils/errorHandler");
const config = require("../config");
const jwt = require("jsonwebtoken");

function sign(data) {
  return jwt.sign(data, config.jwt.secret);
}

function validate(token) {
  return jwt.verify(token, config.jwt.secret);
}

function getToken(auth) {
  if (!auth) {
    throw errorGenerator("There is no token", 404);
  }

  if (!auth.indexOf("Bearer ") === -1) {
    throw errorGenerator("Invalid format", 403);
  }

  let token = auth.replace("Bearer ", "");

  return token;
}

function decodeHeader(request) {
  const authorization = request.headers.authorization || "";
  const token = getToken(authorization);
  const decoded = validate(token);

  request.user = decoded;

  return request;
}

const check = {
  own: (req, owner) => {
    const decoded = decodeHeader(req);

    if (decoded.user.id !== owner) {
      throw errorGenerator("Not enough permission", 401);
    }
  },
};

module.exports = {
  validate,
  check,
  sign,
};
