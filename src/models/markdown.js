'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Markdown extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Markdown.init({
        contentHTML: DataTypes.TEXT('long'),
        contentMarkdown: DataTypes.TEXT('long'),
        description: DataTypes.TEXT('long'),
        voucherId: DataTypes.INTEGER,
        driveId: DataTypes.INTEGER,
        carId: DataTypes.INTEGER,

    }, {
        sequelize,
        modelName: 'Markdown',
    });
    return Markdown;
};