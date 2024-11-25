import { Router } from "express";
import { signup } from "../controllers/authController.js";
import { login } from "../controllers/authController.js";

const router = Router();

// Signup Route
router.post("/signup", signup);

// Lodin Route
router.post("/login", login);

export default router;
