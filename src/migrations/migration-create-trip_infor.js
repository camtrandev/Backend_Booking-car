'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('tripInfors', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },



            driveId: {

                type: Sequelize.INTEGER
            },
            voucherId: {

                type: Sequelize.INTEGER
            },
            maxNumber: {

                type: Sequelize.INTEGER
            },
            currentNumber: {

                type: Sequelize.INTEGER
            },

            dateStartId: {

                type: Sequelize.STRING
            },

            dateEndId: {

                type: Sequelize.STRING
            },
            priceId: {
                allowNull: false,
                type: Sequelize.STRING
            },
            paymentId: {
                allowNull: false,
                type: Sequelize.STRING
            },
            locationStartId: {

                type: Sequelize.STRING
            },
            locationEndId: {

                type: Sequelize.STRING
            },
            descriptionHTML: {

                type: Sequelize.STRING
            },
            descriptionMarkdown: {

                type: Sequelize.STRING
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
        await queryInterface.dropTable('tripInfors');
    }
};