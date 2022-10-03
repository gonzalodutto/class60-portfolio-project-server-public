"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.product);
      user.hasMany(models.offer);
      user.hasMany(models.article);
    }
  }
  user.init(
    {
      name: { type: DataTypes.STRING, unique: true, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false },
      isWritter: { type: DataTypes.BOOLEAN, allowNull: false },
      isSeller: { type: DataTypes.BOOLEAN, allowNull: false },
      imageUrl: { type: DataTypes.TEXT, allowNull: false },
      logoUrl: { type: DataTypes.TEXT, allowNull: false },
      commercialName: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      latitude: { type: DataTypes.DECIMAL },
      longitude: { type: DataTypes.DECIMAL },
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  return user;
};
