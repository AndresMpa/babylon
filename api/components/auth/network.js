const { success, error } = require("../../../network/response");
const router = require("express").Router();
const controller = require("./index");

router.post("/login", function (req, res) {
  controller
    .login(req.body.username, req.body.password)
    .then((token) => {
      success(req, res, token, 200);
    })
    .catch((err) => {
      console.log(err);
      error(req, res, `Invalid information`, 400);
    });
});

module.exports = router;
