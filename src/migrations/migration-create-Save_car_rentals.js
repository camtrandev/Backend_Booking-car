'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Save_car_rentals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },


      carId: {
        type: Sequelize.INTEGER
      },
      statusId: {
        type: Sequelize.STRING
      },
      number: {
        type: Sequelize.INTEGER
      },

      address: {
        type: Sequelize.STRING
      },

      startDate: {
        type: Sequelize.STRING
      },

      endDate: {
        type: Sequelize.STRING
      },

      token: {
        type: Sequelize.STRING
      },

      customerName: {
        type: Sequelize.STRING
      },

      phoneNumber: {
        type: Sequelize.STRING
      },

      email: {
        type: Sequelize.STRING
      },

      note: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Save_car_rentals');
  }
};