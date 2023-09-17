const Model = require('./model');

async function getUsers() {
  const userInstance = await Model.find();
  return userInstance;
}

function addUser(user) {
  const userInstance = new Model(user);
  return userInstance.save();
}

module.exports = {
  add: addUser,
  list: getUsers,
};
