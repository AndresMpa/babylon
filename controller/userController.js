const boom = require("@hapi/boom");

const { users } = require("../models");

async function createUser(req, h) {
  try {
    await users.create(req.payload);
    return h.view("register", {
      title: "Register",
      success: `User created successfully`,
    });
  } catch (error) {
    req.log(["error", "server"], "on createUser creating user", error.message, error);

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
      req.log(["info", "error"], "on validateCredentials no credentials found");

      return h.view("login", {
        title: "Login",
        error: "No user found using those credentials",
      });
    }
  } catch (error) {
    req.log(["error", "server"], "on validateCredentials", error.message, error);

    return h.view("login", {
      title: "Login",
      error: "Server error, please try again later",
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
    "/create-question": "ask",
  };

  return h
    .view(templates[req.path], {
      title: "Validation error",
      error: "Be sure to fill required field",
    })
    .code(400)
    .takeover();
}

module.exports = {
  validateCredentials: validateCredentials,
  failValidation: failValidation,
  createUser: createUser,
  logout: closeSession,
};
