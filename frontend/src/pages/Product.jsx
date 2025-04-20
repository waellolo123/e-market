import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ShopContext } from "../context/shopContext";


const Product = () => {

 const {productId} = useParams();
 const {products} = useContext(ShopContext);
 const [productData, setProductData] = useState(false);

 const fetchProductData = async () => {
   products.map((item)=>{
    if(item._id === productId){
      setProductData(item);
      console.log(item);
      return null;
    }
   })
 }

 useEffect(()=>{
  fetchProductData();
 },[productId, products]);

  return (
    <div className=""></div>
  )
}

export default Product