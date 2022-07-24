const Model = require('./model');

function addChat(chat) {
  const chatInstance = new Model(chat);
  return chatInstance.save();
}

async function getChats(filter) {
  return new Promise((resolve, reject) => {
    let currentFilter = {};
    if (filter) {
      currentFilter = { users: filter };
    }
    Model.find(currentFilter)
      .populate('users')
      .exec((error, populated) => {
        if (error) {
          reject(error);
          return false;
        }
        resolve(populated);
      });
  });
}

module.exports = {
  add: addChat,
  list: getChats,
};
