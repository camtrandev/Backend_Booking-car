'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('car_rentals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      locationId: {

        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT('long')
      },
      contentHTML: {

        type: Sequelize.TEXT('long')
      },
      contentMarkdown: {

        type: Sequelize.TEXT('long')
      },
      image: {
        type: Sequelize.BLOB('long')
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('car_rentals');
  }
};