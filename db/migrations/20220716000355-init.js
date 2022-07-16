'use strict';

const {
  ORDER_PRODUCT_TABLE,
  OrderProductSchema,
} = require('./../models/order-product.model');
const {
  CUSTOMER_TABLE,
  CustomerSchema,
} = require('./../models/customer.model');
const {
  CATEGORY_TABLE,
  CategorySchema,
} = require('./../models/category.model');
const { PRODUCT_TABLE, ProductSchema } = require('./../models/product.model');
const { ORDER_TABLE, OrderSchema } = require('./../models/order.model');
const { USER_TABLE, UserSchema } = require('./../models/user.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(ORDER_PRODUCT_TABLE, OrderProductSchema);
    await queryInterface.createTable(CUSTOMER_TABLE, CustomerSchema);
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
    await queryInterface.createTable(ORDER_TABLE, OrderSchema);
    await queryInterface.createTable(USER_TABLE, UserSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(ORDER_PRODUCT_TABLE);
    await queryInterface.dropTable(CUSTOMER_TABLE);
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(ORDER_TABLE);
    await queryInterface.dropTable(USER_TABLE);
  },
};
