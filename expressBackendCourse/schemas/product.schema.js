const Joi = require('joi');

const id = Joi.string().uuid();
const image = Joi.string().uri();
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
});

const updateProductSchema = Joi.object({
  price: price,
  image: image,
  name: name,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  updateProductSchema,
  createProductSchema,
  getProductSchema,
};
