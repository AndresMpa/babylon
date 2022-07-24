const router = require('express').Router();
const multer = require('multer');

const { success, error } = require('../../network/response.handler');
const controller = require('./controller');

const upload = multer({
  dest: 'public/files',
});

router.get('/', (req, res) => {
  const filterMessage = req.query.chat || null;
  controller
    .listMessages(filterMessage)
    .then((messageList) => {
      success(req, res, messageList, 200);
    })
    .catch((err) => {
      error(req, res, `Unable to load messages ${err}`, 500);
    });
});

router.post('/', upload.single('file'), (req, res) => {
  controller
    .addMessage(req.body.chat, req.body.user, req.body.message, req.file)
    .then((data) => {
      success(req, res, data, 201);
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
