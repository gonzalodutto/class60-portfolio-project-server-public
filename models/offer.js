"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class offer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      offer.belongsTo(models.product);
      offer.belongsTo(models.user);
    }
  }
  offer.init(
    {
      email: { type: DataTypes.STRING, allowNull: false },
      amount: { type: DataTypes.INTEGER, allowNull: false },
      accepted: { type: DataTypes.BOOLEAN, allowNull: false },
    },
    {
      sequelize,
      modelName: "offer",
    }
  );
  return offer;
};
