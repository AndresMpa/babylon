const router = require('express').Router();

router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send(`There's no parameters`);
  }
});

module.exports = router;
