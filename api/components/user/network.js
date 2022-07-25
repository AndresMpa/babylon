const { success, error } = require("../../../network/response");
const router = require("express").Router();

router.get("/", (req, res) => {
  success(req, res, "App is working");
});

module.exports = router;
