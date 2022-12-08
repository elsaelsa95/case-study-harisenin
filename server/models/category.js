'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.belongsTo(models.Asset, {
        foreignKey: "AssetId",
      });
      Category.hasOne(models.ProductAsset, {
        foreignKey: "CategoryId",
      });
    }
  }
  Category.init({
    categoryName: DataTypes.STRING,
    categorySlug: DataTypes.STRING,
    AssetId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};