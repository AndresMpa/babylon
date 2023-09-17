const router = require('express').Router();

router.get('/', (req, res) => {
  console.log(req);
  res.send(`
    <h1>My fancy app</h1>
    <div>
      <p>This service is running under ${process.env.PORT}</p>
    </div>
  `);
});

module.exports = router;
