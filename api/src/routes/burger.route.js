import { Router } from "express";
import {
  createBurger,
  getAllBurger,
  getBurger,
  removeAllBurger,
  removeBurger,
  updateBurger,
} from "../controllers/burger.controller.js";

const router = Router();

router.get("/:id", getBurger);
router.get("/", getAllBurger);
router.post("/", createBurger);
router.put("/:id", updateBurger);
router.delete("/:id", removeBurger);
router.delete("/", removeAllBurger);

export default router;
