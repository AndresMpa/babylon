const { success, error } = require('../../network/response.handler');
const router = require('express').Router();
const controller = require('./controller');

router.get('/', (req, res) => {
  const user = req.query.user || null;
  controller
    .listMessages(user)
    .then((messageList) => {
      success(req, res, messageList, 200);
    })
    .catch((err) => {
      error(req, res, `Unable to load messages ${err}`, 500);
    });
});

router.post('/', (req, res) => {
  controller
    .addMessage(req.body.user, req.body.message)
    .then(() => {
      success(req, res, 'Message received', 201);
    })
    .catch((err) => {
      error(req, res, `Error creating message ${err}`, 400);
    });
});

router.patch('/:id', (req, res) => {
  controller
    .updateMessage(req.params.id, req.body.content)
    .then((data) => {
      success(req, res, data, 200);
    })
    .catch((err) => {
      error(req, res, `Error message can't be edited ${err}`, 500);
    });
});

router.delete('/:id', (req, res) => {
  controller
    .deleteMessage(req.params.id)
    .then(() => {
      success(req, res, `Message ${req.params.id} deleted`, 200);
    })
    .catch((err) => {
      error(req, res, `Error deleting message ${err}`, 500);
    });
});

module.exports = router;
