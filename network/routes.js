const userComponent = require("../api/components/user/network");

const router = require("express").Router();

function endpoint(app) {
  app.use("/api", router);

  // Router paths
  router.use("/user", userComponent);
}

module.exports = endpoint;
