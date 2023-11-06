import jwt from "jsonwebtoken";
import env from "../utils/env.js";

export const verifyToken = (req, res, next) => {
  const token =
    req.cookies.token ||
    req.body.token ||
    req.query.token ||
    req.headers["x-access-token"];

  if (!token)
    return res
      .status(403)
      .json({ message: "A token is required for authentication." });

  try {
    const decoded = jwt.verify(token, env.TOKEN_KEY);
    req.user = decoded;
  } catch (error) {
    return res.status(401).json({ message: "Invalid Token" });
  }
  return next();
};
