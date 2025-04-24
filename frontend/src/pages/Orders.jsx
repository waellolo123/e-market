import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/shopContext"
import Title from "../components/Title";
import axios from "axios";
import { toast } from "react-toastify";


const Orders = () => {

  const {backendUrl, token, currency} = useContext(ShopContext);

  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if(!token){
        return null;
      }
      const response = await axios.post(backendUrl + "/api/order/userOrders", {}, {headers: {token}});
      if(response.data.success){
        let allOrdersItem = [];
        response.data.orders.map((order)=>{
          order.items.map((item)=>{
            item["status"] = order.status
            item["payment"] = order.payment
            item["paymentMethod"] = order.paymentMethod
            item["date"] = order.date
            allOrdersItem.push(item);
          })
        })
        setOrderData(allOrdersItem.reverse())
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  } 

  useEffect(()=>{
    loadOrderData();
  },[token]);

  return (
    <div className="border-t pt-16">
     <div className="text-2xl">
      <Title text1={"My"} text2={"Orders"}/>
     </div>
     <div className="">
      {
        orderData.map((item, index)=>(
          <div className="py-4 border-t border-b my-2 text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4" key={index}>
            <div className="flex items-start gap-6 text-sm">
             <img src={item.image[0]} className="w-16 sm:w-20" alt="" /> 
             <div className="">
              <p className="sm:text-base font-medium">{item.name}</p>
              <div className="flex items-center gap-3 text-base text-gray-700">
                <p>{currency} {item.price}</p>
                <p>Quantity: {item.quantity}</p>
                {/* <p>Size: M</p> */}
              </div>
              <p>Date: <span className="text-gray-400">{new Date(item.date).toDateString()}</span></p>
              <p className="font-semibold">Payment: <span className="text-orange-400">{item.paymentMethod}</span></p>
             </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
             <div className="flex items-center gap-2">
              <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
              <p className="text-sm md:text-base">{item.status}</p>
             </div>
             <button onClick={loadOrderData} className="border px-4 py-2 text-sm font-medium cursor-pointer">Click for Status</button>
            </div>
          </div>
        ))
      }
     </div>
    </div>
  )
}

export default Orders