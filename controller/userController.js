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

module.exports = {
  createUser: createUser,
};
