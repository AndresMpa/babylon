const { success, error } = require("../../../network/response");
const controller = require("./controller");
const router = require("express").Router();

router.get("/", (req, res) => {
  const data = controller.list();
  success(req, res, data);
});

module.exports = router;
