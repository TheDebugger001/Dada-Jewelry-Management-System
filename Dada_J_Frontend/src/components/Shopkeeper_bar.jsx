import React from 'react'
import Profile_pic from './Profile_pic'
import { FiMoreVertical } from 'react-icons/fi'

const Shopkeeper_bar = () => {
  return (
   <div className='w-9/12 h-14 rounded-full border-1 border-gray-500 flex items-center hover:bg-gray-400/20'>
      <div className='w-11.5 h-11.5 ml-5'>
         <Profile_pic />
      </div>
      <p className='font-semibold text-gray-800 relative left-[1.5em]'>Marry Sesami</p>
      <div className='w-7 h-7 rounded-full flex items-center justify-center relative left-[47em] hover:bg-gray-400/50 active:bg-gray-700'>
         <FiMoreVertical className='text-gray-800'/>
      </div>
   </div>
  )
}

export default Shopkeeper_bar