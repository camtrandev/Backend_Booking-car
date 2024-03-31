'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Car_infors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Car_infors.belongsTo(models.Allcode, { foreignKey: 'locationId', targetKey: 'keyMap', as: 'location' })
      Car_infors.belongsTo(models.Allcode, { foreignKey: 'priceId', targetKey: 'keyMap', as: 'priceData' })

    }
  }
  Car_infors.init({
    // cá nhân/tổ chức cho thuê xe
    Name: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    email: DataTypes.STRING,

    // xe
    VehicleName: DataTypes.STRING,
    carBrand: DataTypes.STRING,
    note: DataTypes.STRING,
    priceId: DataTypes.STRING,
    locationId: DataTypes.STRING,
    image: DataTypes.TEXT,
    numberVehicles: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'Car_infors',
  });
  return Car_infors;
};