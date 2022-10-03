"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      commercialName: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "",
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isWritter: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      latitude: { type: Sequelize.DECIMAL, allowNull: true },
      longitude: { type: Sequelize.DECIMAL, allowNull: true },
      imageUrl: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: "",
      },
      logoUrl: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: "",
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
    await queryInterface.dropTable("users");
  },
};
