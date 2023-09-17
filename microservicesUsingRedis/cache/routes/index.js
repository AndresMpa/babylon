const { success } = require("../../network/response");
const router = require("express").Router();
const store = require("../../store/redis");

router.get("/:table", list);
router.put("/:table", upsert);
router.get("/:table/:id", get);

async function list(req, res, next) {
  const datos = await store.list(req.params.table);
  success(req, res, datos, 200);
}

async function upsert(req, res, next) {
  const datos = await store.upsert(req.params.table, req.body);
  success(req, res, datos, 200);
}

async function get(req, res, next) {
  const datos = await store.get(req.params.table, req.params.id);
  success(req, res, datos, 200);
}

module.exports = router;
