const { success, error } = require('../../network/response.handler');
const router = require('express').Router();
const controller = require('./controller');

router.get('/', (req, res) => {
  controller
    .listMessages()
    .then((messageList) => {
      success(req, res, messageList, 200);
    })
    .catch((err) => {
      console.error(`[ERROR: Unable to list message]: ${err}`);
      error(req, res, 'Unable to load messages', 500);
    });
});

router.post('/', (req, res) => {
  controller
    .addMessage(req.body.user, req.body.message)
    .then(() => {
      success(req, res, 'Message received', 201);
    })
    .catch((err) => {
      error(req, res, 'Error creating message', 400);
    });
});

module.exports = router;
