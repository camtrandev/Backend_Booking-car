'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('markdowns', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },


            contentHTML: {
                allowNull: false,
                type: Sequelize.TEXT('long')
            },

            contentMarkdown: {
                allowNull: false,
                type: Sequelize.TEXT('long')
            },

            description: {
                allowNull: true,
                type: Sequelize.TEXT('long')
            },

            driveId: {
                allowNull: true,
                type: Sequelize.INTEGER
            },

            voucherId: {
                allowNull: true,
                type: Sequelize.INTEGER
            },

            carId: {
                allowNull: true,
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
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('markdowns');
    }
};