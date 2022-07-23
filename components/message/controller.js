const store = require('./store');

function addMessage(user, content) {
  return new Promise((resolve, reject) => {
    if (!user || !content) {
      console.error('[ERROR: addMessage]: User or content empty');
      reject('Something when wrong');
      return false;
    }
    const date = new Date();
    const message = {
      date,
      user,
      content,
    };
    store.add(message);
    resolve(message);
  });
}

function listMessages() {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  });
}

module.exports = {
  addMessage,
  listMessages,
};
