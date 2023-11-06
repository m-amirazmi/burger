import User from "../models/user.model.js";

export const createUser = async (req, res, next) => {
  try {
    const user = new User(req.body);
    await user.save();
    return res
      .status(201)
      .json({ message: "A new user created.", value: user });
  } catch (error) {
    error.object = "User";
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  const { id } = req.params;

  try {
  } catch (error) {}
};
