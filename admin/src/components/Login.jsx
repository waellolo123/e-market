import React from 'react'

const Login = () => {
  return (
    <div className='min-h-screen w-full flex items-center justify-center'>
     <div className="max-w-md bg-white shadow-md rounded-lg px-8 py-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-700">Admin Panel</h1>
      <form action="" className="">
        <div className="mb-3 min-w-72">
          <p className="text-sm font-medium text-gray-700 mb-2">Email Address</p>
          <input className='rounded-md w-full px-3 py-2 border border-gray-300' type="email" placeholder='your@email.com' required />
        </div>
        <div className="mb-3 min-w-72">
          <p className="text-sm font-medium text-gray-700 mb-2">Password</p>
          <input className='rounded-md w-full px-3 py-2 border border-gray-300' type="email" placeholder='Enter your password' required />
        </div>
        <button className="mt-2 w-full py-2 px-4 rounded-md text-white bg-black cursor-pointer" type='submit'>Login</button>
      </form>
     </div> 
    </div>
  )
}

export default Login