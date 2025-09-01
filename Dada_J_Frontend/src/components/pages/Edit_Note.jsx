import React from 'react'
import { Link } from 'react-router-dom'

const Edit_Note = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='w-3/9 h-6/9 border-1 border-gray-500 rounded-lg flex flex-col items-center justify-evenly shadow-md shadow-gray-800/40'>
         <div className='w-full h-[4em] flex items-center justify-center'>
            <p className='text-3xl font-semibold text-gray-600'>Note Form</p>
         </div>
         <div className='w-full h-5/10 flex flex-col items-center justify-evenly'>
            <input type="text" placeholder='Name the Note' className='w-10/12 h-1/6 border-1 border-gray-400 rounded-full pl-5 pr-3 outline-none'/>
            <textarea name="" placeholder='Description' id="" cols="30" rows="10" className='w-10/12 max-h-4/9 min-h-3/9 rounded-lg pl-2 pt-2 pr-2 pb-2 leading-5 text-sm border-1 border-gray-400 outline-none'></textarea>
         </div>
         <div className='w-full h-1/10 flex items-center justify-center'>
            <Link to="/admin_dashboard" className='w-full h-full flex items-center justify-center'><button className='w-10/12 h-9/10 bg-gray-800 text-gray-200 rounded-full hover:bg-gray-700'>Submit</button></Link>
         </div>
      </div>
    </div>
  )
}

export default Edit_Note