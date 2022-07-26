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
    throw new Error("There's no token");
  }

  if (!auth.indexOf("Bearer ")) {
    throw new Error("Invalid format");
  }

  let token = auth.replace("Bearer ", "");
  return token;
}

function decodeHeader(request) {
  const authorization = request.headers.authorization || "";
  const token = getToken(authorization);
  const decoded = validate(token);

  req.user = decoded;
}

const check = {
  own: (req, owner) => {
    const decoded = decodeHeader(req);
    console.log(decoded);
  },
};

module.exports = {
  validate,
  sign,
};
