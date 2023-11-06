import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import env from "../utils/env.js";

export const signup = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = new User({ ...req.body, password: encryptedPassword });
    const token = jwt.sign({ user_id: user._id, email }, env.TOKEN_KEY, {
      expiresIn: "2h",
    });
    user.token = token;
    await user.save();

    setSignedToken(user, res);

    return res
      .status(201)
      .json({ message: "Successfully signed up.", value: user });
  } catch (error) {
    error.object = "Auth";
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid Credentials" });

    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword)
      return res.status(400).json({ message: "Invalid Credentials" });

    setSignedToken(user, res);

    return res
      .status(201)
      .json({ message: "Successfully signed in.", value: user });
  } catch (error) {
    error.object = "Auth";
    next(error);
  }
};

export const signout = (req, res) => {};

export const setSignedToken = (user, res) => {
  const cookieOpts = {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
  };

  res.cookie("token", user.token, cookieOpts);
  res.cookie("roles", user.roles);
  user.password = undefined;
  user.token = undefined;
};
