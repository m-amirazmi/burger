const Burger = require("../models/burger.model");

exports.createBurger = async (req, res) => {
  const burger = await Burger.create(req.body);
  return res.status(200).json({ message: "OK!", burger });
};
