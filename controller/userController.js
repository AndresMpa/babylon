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
    if (!result) {
      return h.response("No user found using those credentials").code(401);
    }
  } catch (error) {
    console.error(error);
    return h.response("Server error, please try again later").code(500);
  }

  return h.redirect("/").state("user", {
    name: result.name,
    email: result.email,
  });
}

async function closeSession(req, h) {
  return h.redirect("/login").unstate("user");
}

module.exports = {
  validateCredentials: validateCredentials,
  createUser: createUser,
  logout: closeSession,
};
