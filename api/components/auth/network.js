const { success, error } = require("../../../network/response");
const router = require("express").Router();
const controller = require("./index");

router.post("/login", login);

function login(req, res, next) {
  controller
    .login(req.body.username, req.body.password)
    .then((token) => {
      success(req, res, token, 200);
    })
    .catch(next);
}

module.exports = router;
