import express from "express";
import { addProduct, listProducts, removeProduct, singleProduct } from "../controllers/product.controller.js";
import upload from "../middleware/multer.js";


const router = express.Router();

router.post("/add", upload.fields([
  {name: "image1", maxCount: 1},
  {name: "image2", maxCount: 1},
  {name: "image3", maxCount: 1},
  {name: "image4", maxCount: 1}
]), addProduct);
router.post("/remove", removeProduct);
router.post("/single", singleProduct);
router.get("/list", listProducts);

export default router;