'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car_rental extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Car_rental.belongsTo(models.Allcode, { foreignKey: 'locationId', targetKey: 'keyMap', as: 'locationTypeData' })

    }
  }
  Car_rental.init({
    locationId: DataTypes.STRING,
    contentHTML: DataTypes.TEXT('long'),
    contentMarkdown: DataTypes.TEXT('long'),
    description: DataTypes.TEXT('long'),
    image: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Car_rental',
  });
  return Car_rental;
};