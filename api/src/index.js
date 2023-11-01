import express from "express";
import "dotenv/config";
import env from "./utils/env.js";

const app = express();

app.get("/api", (req, res) => {
  return res.send("This is Backend API");
});

app.listen(env.PORT, () => console.log(`Connecting to port ${env.PORT}`));
