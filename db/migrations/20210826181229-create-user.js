'use strict';

const { UserSchema, USER_TABLE } = require('./../models/user.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(USER_TABLE, UserSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.drop(USER_TABLE);
  }

  // up: async (queryInterface) => {
  //   await queryInterface.addColumn(USER_TABLE, 'role', UserSchema.role);
  // },

  // down: async (queryInterface) => {
  //   await queryInterface.removeColumn(USER_TABLE, 'role');
  // }
};
