const joi = require("joi");

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
    options: {
      validate: {
        payload: joi.object({
          name: joi.string().min(3).required(),
          email: joi.string().email().min(3).required(),
          password: joi.string().min(6).required(),
        }),
      },
    },
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
