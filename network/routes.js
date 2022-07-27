const userComponent = require("../api/components/user/network");
const authComponent = require("../api/components/auth/network");
const postComponent = require("../api/components/post/network");
const swaggerDoc = require("../doc/swagger.json");
const swaggerUi = require("swagger-ui-express");

const router = require("express").Router();

function endpoint(app) {
  app.use("/api", router);

  // Router paths
  router.use("/user", userComponent);
  router.use("/auth", authComponent);
  router.use("/post", postComponent);
  router.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
}

module.exports = endpoint;
