const express = require('express');
const {
  getHomePage,
  getCrud,
  postCrud,
  displayGetCrud,
  getEditCrud,
  putCrud,
  deleteCrud
}
  = require('../controllers/homeController')

  // import file Usercontroller dùng sử lý APi
const {
  handleLogin
} = require('../controllers/userController')

const router = express.Router();

let initWebroutes = (app) => {

  router.get('/', getHomePage);
  router.get('/crud', getCrud);
  router.post('/post-crud', postCrud);
  router.get('/get-crud', displayGetCrud);
  router.get('/edit-crud', getEditCrud);
  router.post('/put-crud', putCrud);
  router.get('/delete-crud', deleteCrud);

// import file Usercontroller dùng sử lý APi, liên quan đến người dùng thì cho vào controller
router.post('/api/login', handleLogin);


  return app.use("/", router);
}

module.exports = initWebroutes;