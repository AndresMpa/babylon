const authBasic = require("@hapi/basic");
const boom = require("@hapi/boom");
const joi = require("joi");

const { users, questions } = require("../models");

const VERSION = "1.0.0";
const NAME = "api-rest";

function failValidation(req, h, err) {
  return boom.badRequest("Check parameters, those were fulfilled incorrectly");
}

async function validateAuth(req, username, password, h) {
  let user;
  try {
    user = await users.validateCredentials({
      email: username,
      password: password,
    });
  } catch (error) {
    req.log(
      "error",
      "on validateAuth from API plugin, something went wrong",
      error.message,
      error
    );
  }

  return {
    credentials: user || {},
    isValid: user !== false,
  };
}

module.exports = {
  name: NAME,
  version: VERSION,
  async register(server, options) {
    const prefix = options.prefix || "api";

    await server.register(authBasic);

    server.auth.strategy("simple", "basic", {
      validate: validateAuth,
    });

    server.route({
      method: "GET",
      path: `/${prefix}/question/{key}`,
      options: {
        auth: "simple",
        validate: {
          params: joi.object({
            key: joi.string().required(),
          }),
          failAction: failValidation,
        },
      },
      handler: async (req, h) => {
        let result;
        try {
          result = await questions.getOne(req.params.key);
          if (!result) {
            return boom.notFound(`Unable to find ${req.params.key}`);
          }
        } catch (error) {
          return boom.badImplementation(
            `Error fetching ${req.params.key} - ${error}`
          );
        }

        return result;
      },
    });

    server.route({
      method: "GET",
      path: `/${prefix}/questions/{amount}`,
      options: {
        auth: "simple",
        validate: {
          params: joi.object({
            amount: joi.number().integer().min(1).max(20).required(),
          }),
          failAction: failValidation,
        },
      },

      handler: async (req, h) => {
        let result;
        try {
          result = await questions.getLast(req.params.amount);
          if (!result) {
            return boom.notFound(`Unable to get questions data`);
          }
        } catch (error) {
          return boom.badImplementation(`Sonwething went wrong ${error}`);
        }

        return result;
      },
    });
  },
};
