import User from "../models/user.model.js";

// login
const loginUser = async (req, res) => {}

// register
const registerUser = async (req, res) => {
  try {
    const {name, email, password} = req.body;
    const exists = await User.findOne({email});
    if (exists){
      return res.status(400).json({success: false, message: "User already exists"});
    }
    
  } catch (error) {
    
  }
}

// admin login
const adminLogin = async (req, res) => {}

export {loginUser, registerUser, adminLogin}