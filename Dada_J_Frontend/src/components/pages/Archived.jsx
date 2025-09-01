import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { FiPlus } from 'react-icons/fi'




const Archived = () => {
  
  const { hovered, setHovered} = useState(false)
  return (
    <>
      {/* Start of the Navbar and Control bar*/}
      <div className='w-4/5 flex flex-col items-center justify-between'>
        {/* Navbar */}
        <div className='w-full h-15 bg-gray-200'>

        </div>

        {/* Starts of all notes */}
        <div className='w-24/25 h-10/11 bg-gray-100 relative rounded-md'>
         <div className='w-full h-10 flex items-center justify-center'>
            <p className='text-4xl italic text-gray-800'>Archived Notes</p>
         </div>
          {/* Control bar */}
          <div className='w-full h-16 bg-gray-300 mt-4 flex items-center justify-between'>
            <div className='w-2/7 h-full flex items-center justify-evenly'>
              <button className='hover:border-2 hover:border-gray-800 hover:bg-transparent hover:text-gray-800 transition duration-150 w-3/6 h-3/5 rounded-lg font-light text-gray-200 bg-gray-800'>Remove from Archive</button>
              <button className='w-30 h-3/5 rounded-md text-gray-200 flex items-center justify-evenly bg-red-800'>Delete</button>
            </div>
            <div className='w-3/7 h-full flex items-center justify-evenly'>
              <div className='w-4/6 h-[3em] flex items-center justify-evenly'>
                <input type="text" placeholder='Search . . .' className='w-4/6 h-8/10 border-1 border-gray-800 rounded-full pl-3 font-light outline-none focus:shadow-md focus:shadow-gray-800/70'/>
                <button className='w-[5em] h-8/10 text-gray-200 bg-gray-800 rounded-full hover:bg-gray-600'>Search</button>
              </div>

              <Link to="/edit_note" className='h-full flex items-center justify-center'>
                <button className='bg-gray-800 w-[8em] h-3/5 rounded-lg flex items-center justify-evenly text-gray-200 font-sm hover:bg-transparent border-2 border-gray-800 hover:text-gray-800'><FiPlus className='w-6 h-6 text-gray-800 font-light'/> Add a Note</button>
              </Link>
            </div>
          </div>

          {/* Starts of the Labeling bar */}

          {/* Title page which shows everything to be done on each field */}
          <div className='w-full h-7/8 mt-1'>
            <div className='w-full h-[3em] mt-7 flex items-center justify-evenly border-b-1 border-gray-800/50'>
              <div className='w-[3em] h-full flex items-center justify-center'>
                <input type="checkbox" />
              </div>
              <div className='w-2/10 h-full flex items-center'>
                <p className='ml-4 font-medium'>Name</p>
              </div>
              <div className='w-2/10 h-full flex items-center'>
                <p className='ml-4 font-medium'>Description</p>
              </div>
              <div className='w-1/6 h-full flex items-center'>
                <p className='ml-4 font-medium'>Modified Date</p>
              </div>
              <div className='w-2/6 h-full flex items-center'>
                <p className='ml-4 font-medium'>Action to be taken</p>
              </div>
            </div>

            {/* Notes that are created here. . . */}
            <div className='w-full h-[3em] flex items-center justify-evenly border-b-1 border-gray-800/50 hover:bg-gray-200'>
              <div className='w-[3em] h-full flex items-center justify-center'>
                <input type="checkbox" />
              </div>
              <div className='w-2/10 h-full flex items-center'>
                <p className='ml-4 font-light'>American new Jewelry</p>
              </div>
              <div className='w-2/10 h-full flex items-center'>
                <p className='ml-4 font-light text-gray-600 text-sm'>These were ordered from afar ...</p>
              </div>
              <div className='w-1/6 h-full flex items-center'>
                <p className='ml-4 font-light'>
                  17/7/2025
                </p>
              </div>
              <div className='w-2/6 h-full flex items-center'>
                <div className='ml-4 w-5/8 h-full flex items-center justify-between'>
                  <Link to="/edit_note" className='text-blue-500 underline'>Edit</Link>
                  <button className='w-20 h-[2em] bg-green-500 text-gray-800 rounded-lg'>Update</button>
                  <button className='w-20 h-[2em] bg-red-500 text-gray-800 rounded-lg'>Delete</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      
    {/*</div>*/}
    </>
  )
}

export default Archived