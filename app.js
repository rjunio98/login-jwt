require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./routes/userRouter");
const adminRouter = require("./routes/adminRouter");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_CONNECTION_URL)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/user", express.json(), userRouter);

app.use("/admin", express.json(), adminRouter);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port", process.env.PORT);
});
