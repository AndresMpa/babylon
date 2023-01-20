const boom = require("@hapi/boom");
const joi = require("joi");

const { questions } = require("../models");

const VERSION = "1.0.0";
const NAME = "api-rest";

module.exports = {
  name: NAME,
  version: VERSION,
  register(server, options) {
    const prefix = options.prefix || "api";

    server.route({
      method: "GET",
      path: `/${prefix}/question/{key}`,
      options: {
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
            return boom.notFound(
              `Unable to find ${req.params.key}`
            );
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
          return boom.badImplementation(
            `Sonwething went wrong ${error}`
          );
        }

        return result;
      },
    });

    function failValidation(req, h, err) {
    return boom.badRequest("Check parameters, those were fulfilled incorrectly");
    }
  },
};
