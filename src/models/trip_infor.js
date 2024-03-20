'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class TripInfor extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            TripInfor.belongsTo(models.User, { foreignKey: 'driveId', as: 'driveData' })

            TripInfor.belongsTo(models.Allcode, { foreignKey: 'priceId', targetKey: 'keyMap', as: 'priceTypeData' })
            TripInfor.belongsTo(models.Allcode, { foreignKey: 'locationStartId', targetKey: 'keyMap', as: 'locationStartTypeData' })
            TripInfor.belongsTo(models.Allcode, { foreignKey: 'paymentId', targetKey: 'keyMap', as: 'paymentTypeData' })
            TripInfor.belongsTo(models.Allcode, { foreignKey: 'locationEndId', targetKey: 'keyMap', as: 'locationEndTypeData' })


        }
    };
    TripInfor.init({

        driveId: DataTypes.INTEGER,
        voucherId: DataTypes.INTEGER,
        maxNumber: DataTypes.INTEGER,
        currentNumber: DataTypes.INTEGER,
        priceId: DataTypes.STRING,
        paymentId: DataTypes.STRING,
        locationStartId: DataTypes.STRING,
        locationEndId: DataTypes.STRING,
        dateStartId: DataTypes.STRING,
        dateEndId: DataTypes.STRING,
        descriptionHTML: DataTypes.STRING,
        descriptionMarkdown: DataTypes.STRING,
        image: DataTypes.TEXT,

    }, {
        sequelize,
        modelName: 'TripInfor',
    });
    return TripInfor;
};