"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "offers",
      [
        {
          email: "a@a.com",
          amount: 2000,
          accepted: false,
          userId: 2,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "a@b.com",
          amount: 1500,
          accepted: false,
          userId: 1,
          productId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "c@c.com",
          amount: 3300,
          accepted: false,
          userId: 1,
          productId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "a@b.com",
          amount: 1500,
          accepted: false,
          userId: 1,
          productId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "c@c.com",
          amount: 3300,
          accepted: false,
          userId: 1,
          productId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("offers", null, {});
  },
};
