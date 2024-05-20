const messageController = require('../controllers/messageController');
const authMiddlewers = require('./../middlewares/authMiddlewers');
const dynamicMiddleware = require('./../middlewares/dynamicMiddleware');
const express = require('express');
const router = express.Router();
router.use(authMiddlewers.protect);
router
  .route('/mymessage')
  .get(
    dynamicMiddleware.addQuery('user', 'userId'),
    messageController.getAllmessage
  );
router
  .route('/')
  .get(authMiddlewers.restrictTo('admin'), messageController.getAllmessage)
  .post(authMiddlewers.restrictTo('admin'), messageController.createmessage);
router
  .route('/:id')
  .get(messageController.getmessage)
  .patch(authMiddlewers.restrictTo('admin'), messageController.updatemessage)
  .delete(messageController.deletemessage);
module.exports = router;
