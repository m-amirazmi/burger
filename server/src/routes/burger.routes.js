const { createBurger } = require("../controllers/burger.controller");

const router = require("express").Router();

router.post("/", createBurger);

module.exports = router;
