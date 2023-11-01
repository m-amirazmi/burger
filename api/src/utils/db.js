import mongoose from "mongoose";
import env from "./env.js";

mongoose.connect(env.DB);

export const db = mongoose.connection;
db.on("disconnected", () =>
  console.log("Database is disconnected successfully")
);
db.on("error", console.error.bind(console, "connection error:"));
