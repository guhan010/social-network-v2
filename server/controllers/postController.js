const Post = require("../model/Post.js");
const axios = require("axios");
const upload = require("../middlewares/uploadMiddleware.js"); // Multer middleware
require("dotenv").config();

// Create a new post with optional image upload
exports.createPost = async (req, res) => {
  try {
    const { content } = req.body;
    const userId = req.user.id;
    let mediaUrl = "";

    // Upload image to Imgur if provided
    if (req.file) {
      const imageBase64 = req.file.buffer.toString("base64");

      const response = await axios.post(
        "https://api.imgur.com/3/image",
        { image: imageBase64 },
        {
          headers: {
            Authorization: `Client-ID guhan010`,
          },
        }
      );

      mediaUrl = response.data.data.link; // Store Imgur image URL
    }

    // Create new post
    const newPost = new Post({
      user: userId,
      content,
      media: mediaUrl,
    });

    await newPost.save();
    res
      .status(201)
      .json({ message: "Post created successfully", post: newPost });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Like or unlike a post
exports.likeUnlikePost = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const post = await Post.findById(id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    if (post.likes.includes(userId)) {
      post.likes = post.likes.filter((like) => like.toString() !== userId);
      await post.save();
      return res.json({ message: "Post unliked", post });
    } else {
      post.likes.push(userId);
      await post.save();
      return res.json({ message: "Post liked", post });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Add a comment to a post
exports.addComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;
    const userId = req.user.id;

    const post = await Post.findById(id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    post.comments.push({ user: userId, text });
    await post.save();

    res.json({ message: "Comment added", post });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Delete a post
exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const post = await Post.findById(id);
    if (!post) return res.status(404).json({ message: "Post not found" });

    if (post.user.toString() !== userId) {
      return res
        .status(403)
        .json({ message: "You can only delete your own posts" });
    }

    await post.deleteOne();
    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
