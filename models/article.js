"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      article.belongsTo(models.user);
    }
  }
  article.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      urlToImage: DataTypes.TEXT,
      url: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "article",
    }
  );
  return article;
};
