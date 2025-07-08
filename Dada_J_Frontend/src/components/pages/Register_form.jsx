import React from 'react'

const Register_form = () => {
  return (
    <div className='w-2/7 h-[38em] bg-white rounded-xl flex flex-col items-center justify-evenly shadow-lg shadow-black/30'>
      <div className='w-full h-1/6 bg-green-50'></div>
      <div className='w-full h-3/7 flex flex-col items-center justify-evenly'>
        <input type="text" placeholder='Username' className='w-4/5 h-1/6 rounded-lg pl-6 pr-5 outline-none ring-1 ring-gray-600 focus:ring-2 focus:ring-blue-600'/>
        <input type="email" placeholder='Email' className='w-4/5 h-1/6 rounded-lg pl-6 pr-5 outline-none ring-1 ring-gray-600 focus:ring-2 focus:ring-blue-600'/>
        <input type="password" placeholder='Password' className='w-4/5 h-1/6 rounded-lg pl-6 pr-5 outline-none ring-1 ring-gray-600 focus:ring-2 focus:ring-blue-600'/>
        <button type="submit" className='w-4/5 h-1/6 rounded-lg pl-6 pr-5 outline-none ring-1  ring-gray-600 bg-gray-600 text-white font-semibold'>Register</button>
      </div>
      <div className='w-full h-2/8 bg-red-500'>
        
      </div>
      <div></div>
    </div>
  )
}

export default Register_form