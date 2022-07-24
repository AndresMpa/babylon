const Model = require('./model');

function addMessage(message) {
  const messageInstance = new Model(message);
  messageInstance.save();
}

async function getMessage(user) {
  return new Promise((resolve, reject) => {
    let currentFilter = {};
    if (user) {
      currentFilter = { user: user };
    }
    const messages = Model.find(currentFilter)
      .populate('user')
      .exec((error, populate) => {
        if (error) {
          reject(error);
          return false;
        }
        resolve(populate);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

async function updateMessage(id, text) {
  const foundMessage = await Model.findById(id);
  foundMessage.content = text;
  const newMessage = await foundMessage.save();
  return newMessage;
}

async function removeMessage(id) {
  return await Model.deleteOne({
    _id: id,
  });
}

module.exports = {
  add: addMessage,
  list: getMessage,
  update: updateMessage,
  remove: removeMessage,
};
