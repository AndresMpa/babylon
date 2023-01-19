const boom = require("@hapi/boom");

const { users } = require("../models");

async function createUser(req, h) {
  let result;

  try {
    result = await users.create(req.payload);
    return h.view("register", {
      title: "Register",
      success: "User created successfully",
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
  return boom.badRequest("Validation failed", req.payload);
}

module.exports = {
  validateCredentials: validateCredentials,
  failValidation: failValidation,
  createUser: createUser,
  logout: closeSession,
};
