'use strict';

const {
  ORDER_PRODUCT_TABLE,
  OrderProductSchema,
} = require('../models/order-products.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(ORDER_PRODUCT_TABLE, OrderProductSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(ORDER_PRODUCT_TABLE);
  },
};
