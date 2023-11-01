import "dotenv/config";
import express from "express";
import env from "./utils/env.js";
import cors from "cors";
import routesBurger from "./routes/burger.route.js";
import { db } from "./utils/db.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/burgers", routesBurger);

app.get("/api", (req, res) => {
  return res.send("This is Backend API");
});

db.on("connected", () => {
  console.log("Database is connected successfully");
  app.listen(env.PORT, () =>
    console.log(`Listening to port http://localhost:${env.PORT}`)
  );
});
