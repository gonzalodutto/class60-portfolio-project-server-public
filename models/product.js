"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      product.belongsTo(models.user);
      product.hasMany(models.offer);
    }
  }
  product.init(
    {
      title: { type: DataTypes.STRING, allowNull: false },
      available: { type: DataTypes.BOOLEAN, allowNull: false },
      price: { type: DataTypes.INTEGER, allowNull: false },
      // bedrooms: { type: DataTypes.INTEGER },
      imageUrl: { type: DataTypes.TEXT, allowNull: false },
      category: { type: DataTypes.STRING, allowNull: false },
      quantity: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "product",
    }
  );
  return product;
};
