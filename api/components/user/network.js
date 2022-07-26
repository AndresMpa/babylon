const { success, error } = require("../../../network/response");
const router = require("express").Router();
const controller = require("./index");

router.get("/", list);
router.put("/", upsert);
router.post("/", upsert);
router.get("/:id", findUser);
router.delete("/:id", deleteUser);

function list(req, res) {
  controller
    .list()
    .then((list) => {
      success(req, res, list, 200);
    })
    .catch((err) => {
      error(req, res, err.message, 500);
    });
}

function upsert(req, res) {
  controller
    .upsert(req.body)
    .then(() => {
      success(req, res, "User created", 200);
    })
    .catch((err) => {
      error(req, res, err.message, 500);
    });
}

function deleteUser(req, res) {
  controller
    .remove(req.params.id)
    .then((status) => {
      success(req, res, status ? "User deleted" : "User doesn't exist", 200);
    })
    .catch((err) => {
      error(req, res, err.message, 500);
    });
}

function findUser(req, res) {
  controller
    .get(req.params.id)
    .then((user) => {
      success(req, res, user, 200);
    })
    .catch((err) => {
      error(req, res, err.message, 500);
    });
}

module.exports = router;
