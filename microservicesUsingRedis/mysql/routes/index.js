const { success } = require("../../network/response");
const router = require("express").Router();
const store = require("../../store/mysql");

router.get("/:table", list);
router.put("/:table", upsert);
router.post("/:table", insert);
router.get("/:table/:id", get);

async function list(req, res, next) {
  const data = await store.list(req.params.table);
  success(req, res, data, 200);
}

async function upsert(req, res, next) {
  const data = await store.upsert(req.params.table, req.body);
  success(req, res, data, 200);
}

async function insert(req, res, next) {
  const data = await store.insert(req.params.table, req.body);
  success(req, res, data, 200);
}

async function get(req, res, next) {
  const data = await store.get(req.params.table, req.params.id);
  success(req, res, data, 200);
}

module.exports = router;
