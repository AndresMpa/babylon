const { success, error } = require('../../network/response.handler');
const router = require('express').Router();
const controller = require('./controller');

router.post('/', (req, res) => {
  controller
    .addChat(req.body.name, req.body.users)
    .then(() => {
      success(req, res, 'Chat created', 201);
    })
    .catch((err) => {
      error(req, res, `Error creating chat ${err}`, 400);
    });
});

router.get('/:userID', (req, res) => {
  controller
    .listChats(req.params.userID)
    .then((data) => {
      success(req, res, data, 201);
    })
    .catch((err) => {
      error(req, res, `Undable to list chats ${err}`, 404);
    });
});

module.exports = router;
