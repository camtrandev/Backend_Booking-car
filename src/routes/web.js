const express = require('express');
import tripInforController from '../controllers/tripInforController'
const {
  getHomePage,
  getCrud,
  postCrud,
  displayGetCrud,
  getEditCrud,
  putCrud,
  deleteCrud,
}
  = require('../controllers/homeController')

const {
  getAllDrive,
  postInforDrive,
  getDetailDriveById
} = require('../controllers/driveController')

// import file Usercontroller dùng sử lý APi, liên quan đến người dùng thì cho vào controller
const {
  handleLogin,
  handleGetAllUser,
  handleCreateNewUser,
  handleEditUser,
  handleDeleteUser,
  getAllCode

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

  // API
  router.post('/api/login', handleLogin);
  router.get('/api/get-all-user', handleGetAllUser);
  router.post('/api/create-new-user', handleCreateNewUser);
  router.put('/api/edit-user', handleEditUser);
  router.delete('/api/delete-user', handleDeleteUser);

  // Viết API lẩy ra ROLE để phân quyền người dùng

  router.get('/api/allcode', getAllCode)

  // lấy thông tin lay xe
  router.get('/api/get-all-drives', getAllDrive);
  // luu thong tin lay xe
  router.post('/api/save-infor-drives', postInforDrive);

  router.get('/api/get-detail-drive-by-id', getDetailDriveById);

  // description Trip Infor
  router.post('/api/save-detail-trip', tripInforController.SaveDetailTrip);
  router.get('/api/get-trip-infor-by-id', tripInforController.getTripInforById); // lưu lịch trình xuống database

  return app.use("/", router);
}

module.exports = initWebroutes;