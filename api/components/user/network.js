const { success, error } = require("../../../network/response");
const router = require("express").Router();
const controller = require("./index");

router.get("/", (req, res) => {
  controller
    .list()
    .then((list) => {
      success(req, res, list, 200);
    })
    .catch((err) => {
      error(req, res, err.message, 500);
    });
});

router.post("/", (req, res) => {
  controller
    .upsert(req.body)
    .then((list) => {
      success(req, res, list, 200);
    })
    .catch((err) => {
      error(req, res, err.message, 500);
    });
});

router.delete("/:id", (req, res) => {
  controller
    .remove(req.params.id)
    .then((list) => {
      success(req, res, list, 200);
    })
    .catch((err) => {
      error(req, res, err.message, 500);
    });
});

router.get("/:id", (req, res) => {
  controller
    .get(req.params.id)
    .then((user) => {
      success(req, res, user, 200);
    })
    .catch((err) => {
      error(req, res, err.message, 500);
    });
});

module.exports = router;
