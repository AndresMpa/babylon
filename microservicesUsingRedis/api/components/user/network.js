const { success } = require("../../../network/response");
const router = require("express").Router();
const { checkAuth } = require("./secure");
const controller = require("./index");

router.get("/", list);
router.post("/", upsert);
router.put("/", checkAuth("update"), upsert);
router.get("/:id", findUser);
router.delete("/:id", deleteUser);
router.get("/following/:id", following);
router.post("/follow/:id", checkAuth("follow"), follow);

function list(req, res, next) {
  controller
    .list()
    .then((list) => {
      success(req, res, list, 200);
    })
    .catch(next);
}

function upsert(req, res, next) {
  controller
    .upsert(req.body)
    .then(() => {
      success(req, res, "User created", 200);
    })
    .catch(next);
}

function deleteUser(req, res, next) {
  controller
    .remove(req.params.id)
    .then((status) => {
      success(req, res, status ? "User deleted" : "User doesn't exist", 200);
    })
    .catch(next);
}

function findUser(req, res, next) {
  controller
    .get(req.params.id)
    .then((user) => {
      success(req, res, user, 200);
    })
    .catch(next);
}

function follow(req, res, next) {
  controller
    .follow(req.user.id, req.params.id)
    .then((data) => {
      success(req, res, data, 200);
    })
    .catch(next);
}

function following(req, res, next) {
  controller
    .following(req.params.id)
    .then((data) => {
      success(req, res, data, 200);
    })
    .catch(next);
}

module.exports = router;
