const userComponent = require("../api/components/user/network");
const swaggerDoc = require("../doc/swagger.json");
const swaggerUi = require("swagger-ui-express");

const router = require("express").Router();

function endpoint(app) {
  app.use("/api", router);

  // Router paths
  router.use("/user", userComponent);
  router.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
}

module.exports = endpoint;
