import { useContext, useState } from "react"
import { assets } from "../assets/assets"
import CartTotal from "../components/CartTotal"
import Title from "../components/Title"
import { ShopContext } from "../context/shopContext"
import axios from "axios"
import { toast } from "react-toastify"


const PlaceOrder = () => {
  
  const {navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products} = useContext(ShopContext);
  const [method, setMethod] = useState("cod");
  const [formData, setFormData] = useState({
    firstName: "", 
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  });

   const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData(data => ({...data, [name]: value}));
   }

   const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let orderItems = [];
      for(const items in cartItems){
        for(const item in cartItems[items]){
          if(cartItems[items][item] > 0){
            const itemInfo = structuredClone(products.find(product => product._id === items));
            if(itemInfo){
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }
      
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee
      }

      switch(method){
        // api calls for cash on delivery
        case "cod":
          { const response = await axios.post(backendUrl + "/api/order/place", orderData, {headers: {token}});
          if(response.data.success){
            setCartItems({});
            navigate("/orders");
            toast.success(response.data.message);
          } else {
            toast.error(response.data.message);
          }
          break; }
        default:
          break;  
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
   }

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* left side */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"Delivery"} text2={"Informations"} />
        </div>
        <div className="flex gap-3">
         <input 
         onChange={onChangeHandler} name="firstName" value={formData.firstName} 
         className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="First name"/> 

         <input  
         onChange={onChangeHandler} name="lastName" value={formData.lastName} 
         className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Last name"/> 
        </div>

         <input 
         onChange={onChangeHandler} name="email" value={formData.email} 
         className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="email" placeholder="Email"/> 

         <input
         onChange={onChangeHandler} name="street" value={formData.street} 
         className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Street"/> 

         <div className="flex gap-3">
         <input 
         onChange={onChangeHandler} name="city" value={formData.city} 
         className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="City"/> 
         <input 
         onChange={onChangeHandler} name="state" value={formData.state} 
         className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="State"/> 
        </div>

         <div className="flex gap-3">
         <input 
         onChange={onChangeHandler} name="zipcode" value={formData.zipcode} 
         className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Zipcode"/> 
         <input 
         onChange={onChangeHandler} name="country" value={formData.country} 
         className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Country"/> 
        </div>

         <input 
         onChange={onChangeHandler} name="phone" value={formData.phone} 
         className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="number" placeholder="Phone"/> 
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
            <button type="submit" className="bg-black text-white px-16 py-3 text-sm cursor-pointer">Place Order</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder;