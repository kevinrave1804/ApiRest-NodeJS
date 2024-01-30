'use strict';

const { PRODUCT_TABLE,ProductSchema} = require("../models/product.model")
const { CATEGORY_TABLE,CategorySchema } = require("../models/category.model")

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
  }
};
