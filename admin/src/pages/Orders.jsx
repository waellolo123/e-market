import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";
import {backendUrl, currency} from "../App";
import {toast} from "react-toastify";
import { assets } from '../assets/assets';

const Orders = ({token}) => {

  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    if(!token){
      return null;
    }
    try {
      const response = await axios.post(backendUrl + "/api/order/list", {}, {headers: {token}});
      if(response.data.success){
        setOrders(response.data.orders);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }
  

   const statusHandler = async (e, orderId) => {
     try {
      const response = await axios.post(backendUrl + "/api/order/status", {orderId, status: e.target.value}, {headers: {token}});
      if(response.data.success){
        await fetchAllOrders();
      }
     } catch (error) {
      console.log(error);
      toast.error(error.data.message);
     }
   }

  useEffect(()=>{
    fetchAllOrders();
  },[token]);


  return (
    <div className=''>
     <h3 className="">Orders Page</h3>
     <div className="">
      {
        orders.map((order, index)=>(
          <div className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700" key={index}>
            <img src={assets.parcel_icon} className='w-12' alt="" />
            {/* user order informations */}
            <div className="">
            <div className="">
              {order.items.map((item, index)=>{
                if(index === order.items.length - 1){
                  return <p className='py-0.5' key={index}><span className='font-semibold text-sm text-blue-800'>{item.name} x {item.quantity}</span></p>
                } else {
                  return <p key={index}><span className='font-semibold text-sm text-blue-800'>{item.name} x {item.quantity}, </span></p>
                }
              })}
            </div>
            <p> <span className="font-bold">-</span> {order.address.firstName + " " + order.address.lastName}</p>
            <div className="">
              <p> <span className="font-bold">-</span> {order.address.street + ","}</p>
              <p> <span className="font-bold">-</span> {order.address.city + ", " + order.address.state + ", " + order.address.country + ", " + order.address.zipcode}</p>
              <p> <span className="font-bold">-</span> {order.address.phone}</p>
            </div>
            </div>

            {/* order informations */}
            <div className="">
              <p> <span className='font-bold'>-</span> Quantity: <span className='text-base font-bold text-gray-700'>{order.items.length}</span></p>
              <p> <span className='font-bold'>-</span> Method of Payment: <span className='font-semibold'>{order.paymentMethod}</span></p>
              <p> <span className='font-bold'>-</span> Payment: <span className={`font-semibold ${order.payment ? "text-green-500" : "text-red-500"}`}>{order.payment ? "Done" : "Pending"}</span></p>
              <p> <span className='font-bold'>-</span> Date: {new Date(order.date).toLocaleDateString()}</p>
            </div>

           <p className='font-semibold '>{currency} {order.amount}</p>

           <select onChange={(e) => statusHandler(e, order._id)} value={order.status} className='p-2 font-semibold'>
            <option value="Order Placed">Order Placed</option>
            <option value="Packing">Packing</option>
            <option value="Shipped">Shipped</option>
            <option value="Out for Delivery">Out for Delivery</option>
            <option value="Deliverd">Deliverd</option>
           </select>

          </div>
        ))
      }
     </div>
    </div>
  )
}

export default Orders;