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

async function viewQuestion(req, h) {
  let data;

  try {
    data = await questions.getOne(req.params.id);
    if (!data) {
      return notFound(req, h);
    }

    return h.view("question", {
      title: "Question details",
      user: req.state.user,
      key: req.params.id,
      question: data,
    });
  } catch (error) {
    console.error(error);
  }
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
  ask: ask,
  home: home,
  login: login,
  register: register,
  viewQuestion: viewQuestion,

  assetNotFound: assetNotFound,
  notFound: notFound,
};
