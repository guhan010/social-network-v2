const express = require("express");
const User = require("../model/User.js");
const authMiddleware = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.get("/myData", authMiddleware, async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.id }).select("-password");
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.put("/myData", authMiddleware, async (req, res) => {
  try {
    const data = req.body;
    const updatedData = await User.findByIdAndUpdate(req.user.id, data, {
      new: true,
      runValidators: true,
    });
    res.json(updatedData);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.get("/allusers", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

router.put("/:id/follow", authMiddleware, async (req, res) => {
  const randomUser_id = req.params.id;
  const currentUser_id = req.user.id;
  await User.findByIdAndUpdate(
    currentUser_id,
    {
      $push: { following: randomUser_id },
    },
    { new: true, runValidators: true }
  );
  await User.findByIdAndUpdate(
    randomUser_id,
    {
      $push: { followers: currentUser_id },
    },
    { new: true, runValidators: true }
  );
});

module.exports = router;
