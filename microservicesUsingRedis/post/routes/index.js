const { success } = require("../../network/response");
const controller = require("../components/post");
const router = require("express").Router();

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
