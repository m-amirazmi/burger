import Burger from "../models/burger.model.js";

export const getAllBurger = async (req, res, next) => {
  try {
    const burgers = await Burger.find({});
    const message = burgers.length > 0 ? "All burgers" : "No burger.";
    return res.status(200).json({ message, value: burgers });
  } catch (error) {
    error.object = "Burger";
    next(error);
  }
};

export const getBurger = async (req, res, next) => {
  const { id } = req.params;
  try {
    const burger = await Burger.findById(id);
    return res
      .status(200)
      .json({
        message: `Burger ${burger.name} has been found.`,
        value: burger,
      });
  } catch (error) {
    error.object = "Burger";
    next(error);
  }
};

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

export const updateBurger = async (req, res, next) => {
  const { id } = req.params;

  try {
    const burger = await Burger.findById(id);
    Object.assign(burger, req.body);
    const updatedBurger = await burger.save();

    return res.status(201).json({
      message: `Burger ${burger.name} is updated.`,
      value: updatedBurger,
    });
  } catch (error) {
    error.object = "Burger";
    next(error);
  }
};

export const removeBurger = async (req, res, next) => {
  const { id } = req.params;

  console.log("removeburger", id);

  try {
    const burger = await Burger.findByIdAndDelete(id);
    return res.json({
      message: `Removed burger ${burger.name}`,
      value: burger,
    });
  } catch (error) {
    error.object = "Burger";
    next(error);
  }
};
