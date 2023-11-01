import Burger from "../models/burger.model.js";

export const createBurger = async (req, res) => {
  const burger = await Burger.create(req.body);
  return res.status(201).json({ message: "A burger created.", burger });
};

export const getAllBurger = async (req, res) => {
  const burgers = await Burger.find({});
  return res.status(200).json({ message: "All burgers.", burgers });
};
