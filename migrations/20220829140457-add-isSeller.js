"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("users", "isSeller", {
      type: Sequelize.BOOLEAN,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("users", "isSeller");
  },
};
