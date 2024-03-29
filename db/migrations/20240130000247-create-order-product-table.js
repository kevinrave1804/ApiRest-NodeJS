'use strict';

const {OrderProductSchema,ORDER_PRODUCT_TABLE} = require('./../models/order-product.model')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(ORDER_PRODUCT_TABLE, OrderProductSchema)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(ORDER_PRODUCT_TABLE)
  }
};
