const store = require('./store');

function listUsers() {
  return store.list();
}

function addUser(name) {
  if (!name) {
    return Promise.reject('Something when wrong');
  }
  const user = {
    name,
  };
  return store.add(user);
}

module.exports = {
  addUser,
  listUsers,
};
