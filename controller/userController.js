const boom = require("@hapi/boom");

const { users } = require("../models");

async function createUser(req, h) {
  let result;

  try {
    result = await users.create(req.payload);
    return h.view("register", {
      title: "Register",
      success: `User ${result.ID} created successfully`,
    });
  } catch (error) {
    console.error(error);
    return h.view("register", {
      title: "Register",
      error: "Something went wrong",
    });
  }
}

async function validateCredentials(req, h) {
  let result;

  try {
    result = await users.validateCredentials(req.payload);
    if (!result) {
      return h.view("login", {
        title: "Login",
        success: "No user found using those credentials",
      });
    }
  } catch (error) {
    console.error(error);
    return h.view("login", {
      title: "Login",
      success: "Server error, please try again later",
    });
  }

  return h.redirect("/").state("user", {
    name: result.name,
    email: result.email,
  });
}

async function closeSession(req, h) {
  return h.redirect("/login").unstate("user");
}

function failValidation(req, h, err) {
  const templates = {
    "/create-user": "register",
    "/validate-user": "login",
  };

  return h.view(templates[req.path], {
    title: "Validation error",
    error: "Be sure to fill required field",
  }).code(400).takeover();
}

module.exports = {
  validateCredentials: validateCredentials,
  failValidation: failValidation,
  createUser: createUser,
  logout: closeSession,
};
