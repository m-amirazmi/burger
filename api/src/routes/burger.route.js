import { Router } from "express";
import {
  createBurger,
  getAllBurger,
  getBurger,
  removeBurger,
  updateBurger,
} from "../controllers/burger.controller.js";

const router = Router();

router.get("/", getAllBurger);
router.get("/:id", getBurger);
router.post("/", createBurger);
router.put("/:id", updateBurger);
router.delete("/:id", removeBurger);

export default router;
