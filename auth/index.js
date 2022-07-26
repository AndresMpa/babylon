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
    throw new Error("There is no token");
  }

  if (!auth.indexOf("Bearer ") === -1) {
    throw new Error("Invalid format");
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
      throw new Error("Not enough permission");
    }
  },
};

module.exports = {
  validate,
  check,
  sign,
};
