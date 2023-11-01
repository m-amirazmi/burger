import { Router } from "express";
import {
  createBurger,
  getAllBurger,
} from "../controllers/burger.controller.js";

const router = Router();

router.get("/", getAllBurger);
router.post("/", createBurger);

export default router;
