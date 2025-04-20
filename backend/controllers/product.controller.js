import Product from "../models/product.model.js"
import {v2 as cloudinary} from "cloudinary";

// add product
const addProduct = async (req, res) => {
  try {
    const {name, description, price, category, subCategory, sizes, bestseller} = req.body;
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter((item)=> item !== undefined);

    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path, {resource_type: "image"});
        return result.secure_url
      })
    )

    const productData = {
      name, 
      description, 
      category, 
      subCategory, 
      price: Number(price), 
      bestseller: bestseller === "true" ? true : false, 
      sizes: JSON.parse(sizes),
      image: imagesUrl,
      date: Date.now()
    }

    const product = new Product(productData);
    await product.save();

    res.status(200).json({success: true, message: "product added successfully"});
    
  } catch (error) {
    console.log("error in add product", error);
    res.status(500).json({success: false, message: error.message});
  }
}

// get products
const listProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({success: true, products});
  } catch (error) {
    console.log("error in get products", error);
    res.status(500).json({success: false, message: error.message});
  }
}

// remove product
const removeProduct = async (req, res) => {}

// get single product
const singleProduct = async (req, res) => {}

export {addProduct, listProducts, removeProduct, singleProduct};