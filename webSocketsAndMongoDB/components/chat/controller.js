const store = require('./store');

function addChat(name, users) {
  if (!name || !users || !Array.isArray(users)) {
    return Promise.reject('Something when wrong');
  }
  const chat = {
    name,
    users: users,
  };
  return store.add(chat);
}

function listChats(userID) {
  return store.list(userID);
}

module.exports = {
  addChat,
  listChats,
};
