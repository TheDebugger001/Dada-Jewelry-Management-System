import React from 'react'
import Shopkeeper_bar from '../Shopkeeper_bar'

const ManageAccounts = () => {
  return (
    <div className='w-4/5 h-screen flex flex-col gap-5'>
      <div className='w-full h-15 bg-gray-200'>
      </div>

      {/* The shopkeeper accounts */}
      <div className='w-full h-7/8'>
         <div className='w-full h-12 flex items-center justify-center'>
            <p className='text-gray-800 text-4xl font-semibold'>Shopkeeper accounts</p>
         </div>
         <div className='w-full h-9/10 flex justify-center'>
            <Shopkeeper_bar />
         </div>
      </div>
    </div>
  )
}

export default ManageAccounts