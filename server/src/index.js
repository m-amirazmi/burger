require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const db = require("./utils/db");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.use("/api/burgers", require("./routes/burger.routes"));

db.on("connected", () => {
  console.log("Database is connected successfully");
  app.listen(process.env.PORT, () =>
    console.log(`Listening to port http://localhost:${process.env.PORT}`)
  );
});
