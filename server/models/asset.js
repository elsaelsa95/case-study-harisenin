'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Asset extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Asset.hasOne(models.Category, {
        foreignKey: "AssetId",
      });

      Asset.hasOne(models.ProductAsset, {
        foreignKey: "AssetId",
      });
    }
  }
  Asset.init({
    name: DataTypes.STRING,
    path: DataTypes.TEXT,
    size: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Asset',
  });
  return Asset;
};