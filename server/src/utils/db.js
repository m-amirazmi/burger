const mongoose = require("mongoose");

mongoose.connect("mongodb://burger-db:27017/burger", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("disconnected", () =>
  console.log("Database is disconnected successfully")
);
db.on("error", console.error.bind(console, "connection error:"));

module.exports = db;
