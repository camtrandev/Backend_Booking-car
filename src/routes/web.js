const express = require('express');
const router = express.Router();
const {
    getHomePage
    } 
  = require('../controllers/homeController')


let initWebroutes = (app) => {

    router.get('/', getHomePage);
    return app.use("/", router);
}

module.exports= initWebroutes;