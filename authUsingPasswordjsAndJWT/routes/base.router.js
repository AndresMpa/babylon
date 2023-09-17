const router = require('express').Router();

const { checkApiKey } = require('../middlewares/auth.handler');

router.get('/', checkApiKey, async (req, res, next) => {
  res.send(`<h1>Hola API</h1>`);
});

module.exports = router;
