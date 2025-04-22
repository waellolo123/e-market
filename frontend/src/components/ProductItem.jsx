import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({id, image, name, price}) => {

  const {currency} = useContext(ShopContext);

  return (
    <Link className='text-gray-700 cursor-pointer border border-gray-200 shadow-sm' to={`/product/${id}`}>
     <div className="overflow-hidden">
      <img className='w-full h-[200px] object-cover hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
     </div>
     {/* texts */}
     <div className="flex flex-col">
     <div className="p-2 flex items-center justify-between">
     <p className="text-sm">{name}</p>
     <p className="text-sm font-medium">{currency} {price}</p>
     </div>
     <div className="p-2">
      <p className="text-sm text-gray-300">Click on the product to see all details</p>
     </div>
     </div>
    </Link>
  )
}

export default ProductItem;