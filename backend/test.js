const mongoose = require("mongoose");

const uri =
  "mongodb+srv://vanshikaahuja012_db_user:YOUR_PASSWORD@cluster0.qt58vqu.mongodb.net/product-forage-ai?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(uri)
  .then(() => {
    console.log("✅ MongoDB Connected");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });