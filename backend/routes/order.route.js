import express from "express";
import { allOrders, placeOrder, placeOrderRazorpay, placeOrderStripe, updateStatus, userOrders } from "../controllers/Order.controller.js";
import adminAuth from "../middleware/AdminAuth.js";
import authUser from "../middleware/auth.js";

const router = express.Router();

// only for admin
router.post("/list", adminAuth, allOrders);
router.post("/status", adminAuth, updateStatus);

// payment features
router.post("/place", authUser, placeOrder);
router.post("/stripe", authUser, placeOrderStripe);
router.post("/razorpay", authUser, placeOrderRazorpay);

// user features
router.post("/userOrders", authUser, userOrders);

export default router;
