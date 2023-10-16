const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const userRouter = require("./routes/userRouter");
const mongoose = require("mongoose");

mongoose
  .connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conexão com o banco de dados estabelecida.");
  })
  .catch((error) => {
    if (error) console.log(error);
  });

app.use("/user", userRouter);

app.listen(process.env.PORT, () => {
  console.log("Server Running");
});
