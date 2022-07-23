const { success, error } = require('./network/response.handler');
const express = require('express');
const router = express.Router();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);

router.get('/', (req, res) => {
  if (req.query.error === 'ok') {
    error(req, res, 'Testing error', 400);
  } else {
    success(req, res, 'Testing success', 200);
  }
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
