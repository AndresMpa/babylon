const userComponent = require("../components/user/network");
const authComponent = require("../components/auth/network");
const swaggerDoc = require("../../doc/swagger.json");
const swaggerUi = require("swagger-ui-express");

const router = require("express").Router();

function endpoint(app) {
  app.use("/api", router);

  // Router paths
  router.use("/user", userComponent);
  router.use("/auth", authComponent);
  router.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
}

module.exports = endpoint;
