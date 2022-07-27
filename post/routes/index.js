const { success } = require("../../../network/response");
const router = require("express").Router();
const controller = require("./index");

router.get("/", list);

function list(req, res, next) {
  controller
    .list()
    .then((data) => {
      success(req, res, data, 200);
    })
    .catch(next);
}

module.exports = router;
