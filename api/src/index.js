import "dotenv/config";
import express from "express";
import env from "./utils/env.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { db } from "./utils/db.js";
import { handleError } from "./controllers/error.controller.js";
import routesBurger from "./routes/burger.route.js";
import routesUser from "./routes/user.route.js";
import routesAuth from "./routes/auth.route.js";
import { verifyToken } from "./middlewares/auth.middleware.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/auth", routesAuth);
app.use("/api/burgers", routesBurger);
app.use("/api/users", routesUser);

app.get("/secret", verifyToken, (req, res) => res.status(200).send("Welcome"));

app.use(handleError);

db.on("connected", () => {
  console.log("Database is connected successfully");
  app.listen(env.PORT, () =>
    console.log(`Listening to port http://localhost:${env.PORT}`)
  );
});
