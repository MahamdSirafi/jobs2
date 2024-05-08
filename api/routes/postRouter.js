const postController = require("../controllers/postController");
  const authMiddlewers = require('./../middlewares/authMiddlewers');
  const express = require("express");
  const router = express.Router();
  router.use(authMiddlewers.protect);
  router.route("/").get(postController.getAllpost).post(postController.createpost);
  router
    .route("/:id")
    .get(postController.getpost)
    .patch(postController.updatepost)
    .delete(postController.deletepost);
  module.exports = router;
  