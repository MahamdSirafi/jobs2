const postsController = require("../controllers/postsController");
  const authMiddlewers = require('./../middlewares/authMiddlewers');
  const express = require("express");
  const router = express.Router();
  router.use(authMiddlewers.protect);
  router.route("/").get(postsController.getAllposts).post(postsController.createposts);
  router
    .route("/:id")
    .get(postsController.getposts)
    .patch(postsController.updateposts)
    .delete(postsController.deleteposts);
  module.exports = router;
  