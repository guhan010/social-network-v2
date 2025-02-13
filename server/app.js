require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRouter = require("./routes/authRoutes.js");
const userRouter = require("./routes/userRouter.js");
const postRouter = require("./routes/postRoutes.js");

const port = process.env.PORT;
const db_url = process.env.MONGO_URL;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRouter);

app.use("/users", userRouter);
app.use("/posts", postRouter);

mongoose
  .connect(db_url)
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err.message));

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
