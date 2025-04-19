import express from "express";
import { loginUser, adminLogin, registerUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.post("/admin", adminLogin);

export default router;