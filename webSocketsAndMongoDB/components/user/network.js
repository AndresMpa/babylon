const { success, error } = require('../../network/response.handler');
const router = require('express').Router();
const controller = require('./controller');

router.get('/', (req, res) => {
  controller
    .listUsers()
    .then((data) => {
      success(req, res, data, 201);
    })
    .catch((err) => {
      error(req, res, `Undable to list users ${err}`, 404);
    });
});

router.post('/', (req, res) => {
  controller
    .addUser(req.body.name)
    .then(() => {
      success(req, res, 'User created', 201);
    })
    .catch((err) => {
      error(req, res, `Error creating user ${err}`, 400);
    });
});

module.exports = router;
