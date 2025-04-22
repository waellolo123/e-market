import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/mongodb.js";
import connectDloudinary from "./config/cloudinary.js";
import userRouter from "./routes/user.route.js";
import productRouter from "./routes/product.route.js";
import cartRouter from "./routes/cart.route.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectDloudinary();

// middlewares
app.use(express.json());
app.use(cors());

// endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);


app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

