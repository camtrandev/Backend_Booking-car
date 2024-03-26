'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('car_infors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        type: Sequelize.STRING
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },

      // xe
      VehicleName: {
        type: Sequelize.STRING
      },
      carBrand: {
        type: Sequelize.STRING
      },
      note: {
        type: Sequelize.STRING
      },
      priceId: {
        type: Sequelize.STRING
      },
      locationId: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.BLOB('long')
      },
      numberVehicles: {
        type: Sequelize.INTEGER
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('car_infors');
  }
};