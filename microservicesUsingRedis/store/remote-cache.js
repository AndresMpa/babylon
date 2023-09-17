const remote = require("./remote");
const config = require("../config");

module.exports = new remote(
  config.microservice.cache.host,
  config.microservice.cache.port
);
