'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductAsset extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductAsset.belongsTo(models.Category, {
        foreignKey: "CategoryId",
      });
    }
  }
  ProductAsset.init({
    AssetId: DataTypes.INTEGER,
    ProductId: DataTypes.INTEGER,
    CategoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductAsset',
  });
  return ProductAsset;
};