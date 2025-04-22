import React from 'react'
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className=''>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm ">
        <div className="">
          <img src={assets.logo} className='mb-5 w-32' alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat voluptate ut rerum omnis accusamus deserunt aliquam cum, recusandae iusto laborum modi eius illum! Maxime laborum, rerum enim error earum, consequatur quisquam blanditiis necessitatibus
          </p>
        </div>
        <div className="">
          <p className="text-xl font-medium mb-5">Campany</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="">
          <p className="text-xl font-medium mb-5">Get in Touch</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+33-200-40-4000</li>
            <li>contact@emarket.com</li>
          </ul>
        </div>
      </div>
      <div className="">
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2025 &copy; E-Market.com - All right Reserverd.</p>
      </div>
    </div>
  )
}

export default Footer;