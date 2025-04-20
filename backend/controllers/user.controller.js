import User from "../models/user.model.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET)
}

// login
const loginUser = async (req, res) => {
  try {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user){
      return res.status(400).json({success: false, message: "User not found"});
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(isMatch){
      const token = createToken(user._id);
      res.status(200).json({success: true, token});
    } else {
      return res.status(400).json({success: false, message: "wrong credentials"});
    }
  } catch (error) {
    console.log("error in login user");
    res.status(500).json({success: false, message: error.message});
  }
}

// register
const registerUser = async (req, res) => {
  try {
    const {name, email, password} = req.body;
    const exists = await User.findOne({email});
    if (exists){
      return res.status(400).json({success: false, message: "User already exists"});
    }
    if(!validator.isEmail(email)){
      return res.status(400).json({success: false, message: "Please enter a valid email"});
    }
    if(password.length < 6){
      return res.status(400).json({success: false, message: "Please enter a strong password"});
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User ({
      name,email, password: hashedPassword
    });
    const user = await newUser.save();
    const token = createToken(user._id);
    res.status(201).json({success: true, token});
  } catch (error) {
    console.log("error in register user");
    res.status(500).json({success: false, message: error.message});
  }
}

// admin login
const adminLogin = async (req, res) => {
  try {
    const {email, password} = req.body;
    if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
      const token = jwt.sign(email+password, process.env.JWT_SECRET);
      res.status(200).json({success: true, token});
    } else {
      res.status(400).json({success: false, message: "invalid credentials"});
    }
  } catch (error) {
    console.log("error in login admin");
    res.status(500).json({success: false, message: error.message});
  }
}

export {loginUser, registerUser, adminLogin}