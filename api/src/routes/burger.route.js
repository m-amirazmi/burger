import { Router } from "express";
import {
  createBurger,
  getAllBurger,
  updateBurger,
} from "../controllers/burger.controller.js";

const router = Router();

router.get("/", getAllBurger);
router.post("/", createBurger);
router.put("/:id", updateBurger);

export default router;
