const postsController = require('../controllers/postsController');
const authMiddlewers = require('./../middlewares/authMiddlewers');
const dynamicMiddleware = require('./../middlewares/dynamicMiddleware');
const { checkTest } = require('./../middlewares/testMiddleware');

const express = require('express');
const router = express.Router();
router.use(authMiddlewers.protect);
router
  .route('/mine')
  .get(
    authMiddlewers.restrictTo('mgr'),
    dynamicMiddleware.addQuery('owner', 'userId'),
    postsController.getAllposts
  );
router
  .route('/')
  .get(postsController.getAllposts)
  .post(
    authMiddlewers.restrictTo('mgr'),
    dynamicMiddleware.addVarBody('owner', 'userId'),
    postsController.createposts
  );
router
  .route('/:id')
  .get(postsController.getposts)
  .patch(authMiddlewers.restrictTo('mgr'), postsController.updateposts)
  .delete(authMiddlewers.restrictTo('mgr'), postsController.deleteposts);

router
  .route('/:id/test')
  .get(
    authMiddlewers.restrictTo('user'),
    dynamicMiddleware.addQuery('fields', 'test'),
    dynamicMiddleware.addQuery('_id', 'id'),
    checkTest,
    postsController.getAllposts
  );
module.exports = router;
