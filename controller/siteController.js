function home(req, h) {
  return h.view("index", {
    title: "Home",
  });
}

function register(req, h) {
  return h.view("index", {
    title: "Home",
  });
}

module.exports = {
  register: register,
  home: home,
};
