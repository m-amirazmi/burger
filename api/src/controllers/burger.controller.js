import Burger from "../models/burger.model.js";

export const createBurger = async (req, res, next) => {
  try {
    const burger = new Burger(req.body);
    await burger.save();
    return res
      .status(201)
      .json({ message: "A burger created.", value: burger });
  } catch (error) {
    error.object = "Burger";
    next(error);
  }
};

export const getAllBurger = async (req, res) => {
  const burgers = await Burger.find({});
  return res.status(200).json({ message: "All burgers.", value: burgers });
};
