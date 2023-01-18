function home(req, h) {
  return h.view("index", {
    title: "Home",
  });
}

function register(req, h) {
  return h.view("register", {
    title: "Register",
  });
}

function login(req, h) {
  return h.view("login", {
    title: "Login",
  });
}

module.exports = {
  register: register,
  login: login,
  home: home,
};
