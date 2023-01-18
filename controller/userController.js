const { users } = require("../models");

async function createUser(req, h) {
  let result;

  try {
    result = await users.create(req.payload);

    return h.response(`User ${result} created`).code(200);
  } catch (error) {
    console.error(error);
    return h.response("Something went wrong").code(500);
  }
}

async function validateCredentials(req, h) {
  let result;

  try {
    result = await users.validateCredentials(req.payload);
  } catch (error) {
    console.error(error);
    return h.response("No user found using those credentials").code(404);
  }

  return result;
}

module.exports = {
  createUser: createUser,
  validateCredentials: validateCredentials,
};
