require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const port = process.env.PORT;
const db_url = process.env.MONGO_URL;
const app = express();

mongoose
  .connect(db_url)
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err.message));

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
