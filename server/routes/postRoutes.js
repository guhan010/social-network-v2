const express = require("express");
const {
  createPost,
  likeUnlikePost,
  addComment,
  deletePost,
} = require("../controllers/postController.js");
const authMiddleware = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.post("/", authMiddleware, createPost);
router.post("/:id/like", authMiddleware, likeUnlikePost);
router.post("/:id/comment", authMiddleware, addComment);
router.delete("/:id", authMiddleware, deletePost);

module.exports = router;
