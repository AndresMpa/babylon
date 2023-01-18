const joi = require("joi");

const siteController = require("../controller/siteController.js");
const userController = require("../controller/userController.js");

module.exports = [
  {
    path: "/",
    method: "GET",
    handler: siteController.home,
  },
  {
    method: "GET",
    path: "/register",
    handler: siteController.register,
  },
  {
    method: "GET",
    path: "/login",
    handler: siteController.login,
  },
  {
    method: "GET",
    path: "/logout",
    handler: userController.logout,
  },
  {
    method: "POST",
    path: "/create-user",
    options: {
      validate: {
        payload: joi.object({
          name: joi.string().min(3).required(),
          email: joi.string().email().min(3).required(),
          password: joi.string().min(6).required(),
        }),
        failAction: userController.failValidation,
      },
    },
    handler: userController.createUser,
  },
  {
    method: "POST",
    path: "/validate-user",
    options: {
      validate: {
        payload: joi.object({
          email: joi.string().email().min(3).required(),
          password: joi.string().min(6).required(),
        }),
        failAction: userController.failValidation,
      },
    },
    handler: userController.validateCredentials,
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
