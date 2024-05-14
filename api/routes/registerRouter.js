const registerController = require('../controllers/registerController');
const authMiddlewers = require('./../middlewares/authMiddlewers');
const express = require('express');
const router = express.Router();
router.use(authMiddlewers.protect);
router
  .route('/')
  .get(authMiddlewers.restrictTo('admin'), registerController.getAllregister)
  .post(
    authMiddlewers.restrictTo('user'),
    dynamicMiddleware.addVarBody('user', 'userId'),
    registerController.createregister
  );
router
  .route('/:id')
  .get(registerController.getregister)
  .patch(registerController.updateregister)
  .delete(registerController.deleteregister);
module.exports = router;
