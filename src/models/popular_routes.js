'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Popular_routes extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Popular_routes.init({

        tripId: DataTypes.INTEGER,
        dateStartId: DataTypes.INTEGER,
        dateEndId: DataTypes.INTEGER,
        image: DataTypes.STRING,
        locationStartId: DataTypes.STRING,
        locationEndId: DataTypes.STRING,


    }, {
        sequelize,
        modelName: 'Popular_routes',
    });
    return Popular_routes;
};