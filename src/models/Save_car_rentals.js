'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Save_car_rentals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Save_car_rentals.init({
    carId: DataTypes.INTEGER,
    statusId: DataTypes.STRING,
    number: DataTypes.INTEGER,
    address: DataTypes.STRING,
    startDate: DataTypes.STRING,
    endDate: DataTypes.STRING,
    token: DataTypes.STRING,

    // customer
    customerName: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    email: DataTypes.STRING,
    note: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Save_car_rentals',
  });
  return Save_car_rentals;
};