const Joi = require('joi');

const phone = Joi.string();
const lastName = Joi.string();
const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const userId = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string();

const getCustomerSchema = Joi.object({
  id: id.required(),
});

const createCustomerSchema = Joi.object({
  name: name.required(),
  phone: phone.required(),
  lastName: lastName.required(),
  user: Joi.object({
    email: email.required(),
    password: password.required(),
  }),
});

const updateCustomerSchema = Joi.object({
  name,
  phone,
  userId,
  lastName,
});

module.exports = {
  getCustomerSchema,
  createCustomerSchema,
  updateCustomerSchema,
};
