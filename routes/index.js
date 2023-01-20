const joi = require("joi");

const siteController = require("../controller/siteController.js");
const userController = require("../controller/userController.js");
const questionController = require("../controller/questionController.js");

module.exports = [
  {
    path: "/",
    method: "GET",
    options: {
      cache: {
        expiresIn: 1000 * 30,
        privacy: "private",
      },
    },
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
    path: "/ask",
    handler: siteController.ask,
  },
  {
    method: "GET",
    path: "/question/{id}",
    handler: siteController.viewQuestion,
  },

  {
    method: "GET",
    path: "/logout",
    handler: userController.logout,
  },
  {
    method: "GET",
    path: "/answer/{questionId}/{answerId}",
    handler: questionController.setRightAnswer,
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
    method: "POST",
    path: "/create-question",
    options: {
      validate: {
        payload: joi.object({
          title: joi.string().required(),
          description: joi.string().required(),
        }),
        failAction: userController.failValidation,
      },
    },
    handler: questionController.createQuestion,
  },
  {
    method: "POST",
    path: "/answer-question",
    options: {
      validate: {
        payload: joi.object({
          answer: joi.string().required(),
          id: joi.string().required(),
        }),
        failAction: userController.failValidation,
      },
    },
    handler: questionController.answerQuestion,
  },

  {
    method: "GET",
    path: "/assets/{param*}",
    handler: {
      directory: {
        path: ".",
        index: ["index.html"],
      },
    },
  },
  {
    method: ["GET", "POST"],
    path: "/{any*}",
    handler: siteController.notFound,
  },
];
