const { questions } = require("../models");

async function home(req, h) {
  let data;
  try {
    data = await questions.getLast(10);
  } catch (error) {
    console.error(error);
  }

  return h.view("index", {
    title: "Home",
    questions: data,
    user: req.state.user,
  });
}

function register(req, h) {
  if (req.state.user) {
    return h.redirect("/");
  }

  return h.view("register", {
    title: "Register",
    user: req.state.user,
  });
}

function login(req, h) {
  if (req.state.user) {
    return h.redirect("/");
  }

  return h.view("login", {
    title: "Login",
    user: req.state.user,
  });
}

function ask(req, h) {
  if (!req.state.user) {
    return h.redirect("/login");
  }

  return h.view("ask", {
    title: "Create question",
    user: req.state.user,
  });
}

function notFound(req, h) {
  return h.view("404", {}, { layout: "errorLayout" }).code(404);
}

function assetNotFound(req, h) {
  const response = req.response;

  if (response.isBoom && response.output.statusCode === 404) {
    return h.view("404", {}, { layout: "errorLayout" }).code(404);
  } else {
    return h.continue;
  }
}

module.exports = {
  assetNotFound: assetNotFound,
  notFound: notFound,
  register: register,
  login: login,
  home: home,
  ask: ask,
};
