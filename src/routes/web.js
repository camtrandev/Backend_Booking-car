const express = require('express');
const router = express.Router();
const {
    getHomePage,
    getCrud,
    postCrud,
    displayGetCrud
    } 
  = require('../controllers/homeController')


let initWebroutes = (app) => {

    router.get('/', getHomePage);
    router.get('/crud', getCrud);
    router.post('/post-crud', postCrud);
    router.get('/get-crud', displayGetCrud);
    return app.use("/", router);
}

module.exports= initWebroutes;