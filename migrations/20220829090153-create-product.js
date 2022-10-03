"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      available: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      price: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      // bedrooms: {
      //   type: Sequelize.INTEGER,
      // },
      imageUrl: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      category: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 1,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("products");
  },
};
