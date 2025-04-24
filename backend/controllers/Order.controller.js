import Order from "../models/order.model.js";
import User from "../models/user.model.js";

// placing order usein cash on delivery method COD
const placeOrder = async (req, res) => {
  try {
    const {userId, items, amount, address} = req.body;
    const orderData = {
      userId, 
      items, 
      amount, 
      address,
      paymentMethod: "COD", 
      payment: false, 
      date: Date.now()
    }
    const newOrder = new Order(orderData);
    await newOrder.save();
    await User.findByIdAndUpdate(userId, {cartData: {}});
    res.status(200).json({success: true, message: "Order placed success"});
  } catch (error) {
    console.log(error);
    res.status(500).json({success: false, message: error.message});
  }
}

// place order with stripe
const placeOrderStripe = async (req, res) => {}

// place order with razorpay
const placeOrderRazorpay = async (req, res) => {}

// all orders data for admin panel
const allOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.status(200).json({success: true, orders});
  } catch (error) {
    console.log(error);
    res.status(500).json({success: false, message: error.message});
  }
}

// user order data for frontend
const userOrders = async (req, res) => {
  try {
    const {userId} = req.body;
    const orders = await Order.find({userId});
    res.status(200).json({success: true, orders});
  } catch (error) {
    console.log(error);
    res.status(500).json({success: false, message: error.message});
  }
}

// update order status from admin panel
const updateStatus = async (req, res) => {
  try {
    const {orderId, status} = req.body;
    await Order.findByIdAndUpdate(orderId, {status});
    res.status(200).json({success: true, message: "Status updated"});
  } catch (error) {
    console.log(error);
    res.status(500).json({success: false, message: error.message});
  }
}

export {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus};