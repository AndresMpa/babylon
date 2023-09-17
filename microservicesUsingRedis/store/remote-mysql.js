const remote = require("./remote");
const config = require("../config");

module.exports = new remote(
  config.microservice.db.host,
  config.microservice.db.port
);
