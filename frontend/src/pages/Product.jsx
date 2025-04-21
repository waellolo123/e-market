import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { ShopContext } from "../context/shopContext";
import { assets } from "../assets/assets";
import RelatedProduct from "../components/RelatedProduct";


const Product = () => {

 const {productId} = useParams();
 const {products, currency, addToCart} = useContext(ShopContext);
 const [productData, setProductData] = useState(false);
 const [image, setImage] = useState("");
 const [size, setSize] = useState("");


 const fetchProductData = async () => {
   products.map((item)=>{
    if(item._id === productId){
      setProductData(item);
      setImage(item.image[0]);
      return null;
    }
   })
 }

 useEffect(()=>{
  fetchProductData();
 },[productId, products]);

  return productData ? (
    <div className="border-t pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* product data */}
     <div className="flex gap-12 flex-col sm:flex-row ">
      {/* product images */}
      <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row ">
        <div className="flex flex-row sm:flex-col md:flex-col lg:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
         {
          productData.image.map((item, index)=>(
            <img onClick={() => setImage(item)} src={item} key={index} className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer" alt="" />
          ))
         } 
        </div>
        <div className="w-full sm:w-[80%]">
          <img className="w-full h-auto " src={image} alt="" />
        </div>
      </div>
      {/* product informations */}
      <div className="flex-1">
        <h1 className="font-medium text-2xl mt-2 text-gray-600">{productData.name}</h1>
        <div className="flex items-center gap-1 mt-2">
          <img src={assets.star_icon} alt="" className="w-3 5" />
          <img src={assets.star_icon} alt="" className="w-3 5" />
          <img src={assets.star_icon} alt="" className="w-3 5" />
          <img src={assets.star_icon} alt="" className="w-3 5" />
          <img src={assets.star_dull_icon} alt="" className="w-3 5" />
          <p className="pl-2">(122)</p>
        </div>
        <p className="mt-5 text-3xl font-medium">{currency} {productData.price}</p>
        <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
        <div className="flex flex-col gap-4 my-8">
          <p className="">Select Size</p>
          <div className="flex gap-2">
            {productData.sizes.map((item, index)=>(
              <button onClick={()=>setSize(item)} className={`py-2 px-4 bg-gray-100 cursor-pointer ${item === size ? "bg-orange-500 text-white" : ""}`} key={index}>{item}</button>
            ))}
          </div>
        </div>
        <button onClick={()=>addToCart(productData._id, size)} className="bg-black text-white px-8 py-3 texsm active:bg-gray-700 cursor-pointer">Add To Cart</button>
        <hr className="mt-8 sm:w-4/5" />
        <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
          <p className="">100% Original Product.</p>
          <p className="">Cash on delivery is available on this product.</p>
          <p className="">Easy return and exchange policy within 7 days.</p>
        </div>
      </div>
     </div>
     {/* description and review */}
     <div className="mt-20">
      <div className="flex gap-2">
        <b className="border px-5 py-3 text-sm">Description</b>
        <p className="border px-5 py-3 text-sm">Reviews (122)</p>
      </div>
      <div className="mt-2 flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores suscipit dolor obcaecati commodi repellendus doloribus, nobis voluptate nulla sint reiciendis deserunt odit temporibus beatae distinctio quam eaque sed aliquid saepe ex maxime. Recusandae, earum! Odit, magnam esse velit mollitia error adipisci odio enim quos amet. Sunt laboriosam incidunt numquam nisi suscipit</p> 
       <p className="">E-commerce websites typically display products or services along with detailed descriptions, images prices and any available variations (e.g., sizes, colrs). Each product usually ash its own dedicated page with relevant informations.</p>
      </div>
     </div>
     {/* display related products */}
     <RelatedProduct category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : <div className="opacity-0"></div>
}

export default Product