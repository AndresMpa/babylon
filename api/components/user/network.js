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
    .then(() => {
      success(req, res, "User created", 200);
    })
    .catch((err) => {
      error(req, res, err.message, 500);
    });
});

router.delete("/:id", (req, res) => {
  controller
    .remove(req.params.id)
    .then((status) => {
      success(req, res, status ? "User deleted" : "User doesn't exist", 200);
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
