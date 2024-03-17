'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('popular_routes', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },


            tripId: {

                type: Sequelize.INTEGER
            },

            dateStartId: {

                type: Sequelize.INTEGER
            },

            dateEndId: {

                type: Sequelize.INTEGER
            },

            image: {

                type: Sequelize.STRING
            },
            locationStartId: {

                type: Sequelize.STRING
            },
            locationEndId: {

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
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('popular_routes');
    }
};