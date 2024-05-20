const registerController = require('../controllers/registerController');
const authMiddlewers = require('./../middlewares/authMiddlewers');
const dynamicMiddleware = require('./../middlewares/dynamicMiddleware');
const cvmiddlewares = require('../middlewares/cvmiddlewares');
const express = require('express');
const router = express.Router();
router.use(authMiddlewers.protect);
router
  .route('/mine')
  .get(
    authMiddlewers.restrictTo('user'),
    dynamicMiddleware.addQuery('user', 'userId'),
    registerController.getAllregister
  );
router
  .route('/')
  .get(
    authMiddlewers.restrictTo('admin', 'mgr'),
    registerController.getAllregister
  )
  .post(
    authMiddlewers.restrictTo('user'),
    cvmiddlewares.uploadCV,
    dynamicMiddleware.setPathImginBody('cv', 'cv'),
    dynamicMiddleware.addVarBody('user', 'userId'),
    registerController.createregister
  );
router
  .route('/:id')
  .get(registerController.getregister)
  .patch(registerController.updateregister)
  .delete(registerController.deleteregister);
module.exports = router;
