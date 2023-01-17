const siteController = require("../controller/siteController.js");
const userController = require("../controller/userController.js");

module.exports = [
  {
    method: "GET",
    path: "/",
    handler: siteController.home,
  },
  {
    method: "GET",
    path: "/register",
    handler: siteController.register,
  },
  {
    method: "POST",
    path: "/create-user",
    handler: userController.createUser,
  },
  {
    method: "GET",
    path: "/{param*}",
    handler: {
      directory: {
        path: ".",
        index: ["index.html"],
      },
    },
  },
];
