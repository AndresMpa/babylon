const store = require('./store');

function addMessage(chat, user, content) {
  return new Promise((resolve, reject) => {
    if (!chat || !user || !content) {
      reject('Something when wrong');
      return false;
    }
    const date = new Date();
    const message = {
      date,
      user,
      chat,
      content,
    };
    store.add(message);
    resolve(message);
  });
}

function listMessages(user) {
  return new Promise((resolve, reject) => {
    resolve(store.list(user));
  });
}

function updateMessage(id, content) {
  return new Promise(async (resolve, reject) => {
    if (!id || !content) {
      reject('Not enough data');
      return false;
    }
    const result = await store.update(id, content);
    resolve(result);
  });
}

function deleteMessage(id) {
  return new Promise(async (resolve, reject) => {
    if (!id) {
      reject("There's no id to delete");
      return false;
    }
    store
      .remove(id)
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
}

module.exports = {
  addMessage,
  listMessages,
  updateMessage,
  deleteMessage,
};
