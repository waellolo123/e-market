import { useContext, useState } from "react"
import { assets } from "../assets/assets"
import CartTotal from "../components/CartTotal"
import Title from "../components/Title"
import { ShopContext } from "../context/shopContext"


const PlaceOrder = () => {

  const [method, setMethod] = useState("cod");
  const {navigate} = useContext(ShopContext);

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* left side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"Delivery"} text2={"Informations"} />
        </div>
        <div className="flex gap-3">
         <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="First name"/> 
         <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Last name"/> 
        </div>
         <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="email" placeholder="Email address"/> 
         <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Street"/> 
         <div className="flex gap-3">
         <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="City"/> 
         <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="State"/> 
        </div>
         <div className="flex gap-3">
         <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Zipcode"/> 
         <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Country"/> 
        </div>
         <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Phone"/> 
      </div>
      {/* right side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"Payment"} text2={"Method"}/>
          {/* payment methods*/}
          <div className="flex gap-3 flex-col lg:flex-row">

           <div onClick={() => setMethod("stripe")} className="flex items-center border p-2 px-3 cursor-pointer">
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "stripe" ? "bg-green-400" : ""} `}></p>
            <img src={assets.stripe_logo} className="h-5 mx-4" alt="" />
           </div>  

           <div onClick={() => setMethod("razorpay")} className="flex items-center border p-2 px-3 cursor-pointer">
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "razorpay" ? "bg-green-400" : ""} `}></p>
            <img src={assets.razorpay_logo} className="h-5 mx-4" alt="" />
           </div>  

           <div onClick={() => setMethod("cod")} className="flex items-center border p-2 px-3 cursor-pointer">
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method === "cod" ? "bg-green-400" : ""} `}></p>
            <p className="text-gray-500 text-sm font-medium mx-4">Cash on Delivery</p>
           </div>  

          </div>
          <div className="w-full text-end mt-8">
            <button onClick={() => navigate("/orders")} className="bg-black text-white px-16 py-3 text-sm cursor-pointer">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder;