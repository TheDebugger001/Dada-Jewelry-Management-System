import React from 'react'
import { Link } from 'react-router'

// import { apple } from '../../../public/images/apple.png'
// import { google } from '../../../public/images/google.png'

const Register_form = () => {
  return (
    <div className='w-3/11 h-[38em] bg-white rounded-xl flex flex-col items-center justify-evenly shadow-lg shadow-black/30 relative'>
      <div className='w-full h-1/6 flex flex-col items-center justify-evenly relative top-4'>
        <img src="/images/Dada-logo.png" alt="" className='w-40 h-16 mr-5'/>
        <p className='font-light text-sm'>Access your jewelry records anytime, anywhere.</p>
      </div>
      <div className='w-full h-3/7 flex flex-col items-center justify-evenly'>
        <input type="text" placeholder='Username' className='w-4/5 h-1/6 rounded-lg pl-6 pr-5 outline-none ring-1 ring-gray-600 focus:ring-2 focus:ring-gray-600'/>
        <input type="email" placeholder='Email' className='w-4/5 h-1/6 rounded-lg pl-6 pr-5 outline-none ring-1 ring-gray-600 focus:ring-2 focus:ring-gray-600'/>
        <input type="password" placeholder='Password' className='w-4/5 h-1/6 rounded-lg pl-6 pr-5 outline-none ring-1 ring-gray-600 focus:ring-2 focus:ring-gray-600'/>
        <button type="submit" className='w-4/5 h-1/6 rounded-lg pl-6 pr-5 outline-none ring-1  ring-gray-600 bg-gray-600 text-white font-semibold hover:bg-gray-500 active:transform active:scale-95'>Register</button>
      </div>
      <div className='w-full h-2/8 relative -top-[1em]'>
        <div className='w-full h-3 flex items-center justify-center'>
          <hr className='w-[10em]'/>
          <p className='m-[2em]'>or</p>
          <hr className='w-[10em]'/>
        </div>
        <div className='w-full h-4/5 flex flex-col items-center justify-evenly'>
          <div className='w-10/13 h-3/8 rounded-full ring-1 ring-gray-600/30 flex items-center justify-center'>
            <img src="/images/google.png" alt="" className='m-3 w-7 h-7' />
            <p className='font-semibold'>Sign in with Google</p>
          </div>
          <div className='w-10/13 h-3/8 rounded-full ring-1 ring-gray-600/30 flex items-center justify-center'>
            <img src="/images/apple.png" alt="" className='m-3 w-7 h-7' />
            <p className='font-semibold'>Sign in with Apple</p>
          </div>
        </div>
      </div>
      <div className='w-full h-[1.5em] flex items-center justify-center relative -top-6'>
        <p>Already have an account? <button className='font-semibold text-gray-600 hover:text-gray-800 hover:underline transition duration-150'>Login</button></p>
      </div>
    </div>
  )
}

export default Register_form