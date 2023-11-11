'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class intoMoney extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  intoMoney.init({
    voucherId: DataTypes.INTEGER,
    distance: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'intoMoney',
  });
  return intoMoney;
};