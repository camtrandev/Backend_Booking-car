'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Incentive extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // Incentive.belongsTo(models.User, { foreignKey: 'driveId' })

        }
    };
    Incentive.init({
        contentHTML: DataTypes.TEXT('long'),
        contentMarkdown: DataTypes.TEXT('long'),
        description: DataTypes.TEXT('long'),
        voucherId: DataTypes.STRING,
        garageId: DataTypes.INTEGER,
        driveId: DataTypes.INTEGER,
        image: DataTypes.TEXT,
        expirationDate: DataTypes.STRING,

    }, {
        sequelize,
        modelName: 'Incentive',
    });
    return Incentive;
};