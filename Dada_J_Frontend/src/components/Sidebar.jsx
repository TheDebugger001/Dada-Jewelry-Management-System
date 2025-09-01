import React from 'react'
import { FaHouseUser, FaBox, FaCog } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
   // <div className='w-full min-h-screen'>
      <div className='w-1/5 h-screen bg-gray-800 flex flex-col'>
        <div className='w-[19.5em] h-16 bg-gray-300 rounded-r-full ml-1 mt-4 flex items-center justify-center'>
          <img src="../images/Dada-logo.png" alt="" className='w-2/6 ml-3' />
        </div>
        <hr className='mt-4 w-full h-[.1em] bg-gray-400 text-transparent flex flex-col items-center' />
        <Link to="/admin_dashboard"><div className='w-[19.5em] h-14 bg-gray-600/30 mt-4 rounded-l-full flex items-center hover:bg-gray-600/50 focus:bg-white/70'>
          <FaHouseUser className='ml-10 w-4 h-4 text-gray-300' />
          <p className='ml-4 font-light text-lg text-gray-300'>Dashboard</p>
        </div></Link>
        <Link to="/archived"><div className='w-[19.5em] h-14 bg-gray-600/30 mt-4 rounded-l-full flex items-center hover:bg-gray-600/50 active:bg-white/70 active:text-gray-600'>
          <FaBox className='ml-10 w-4 h-4 text-gray-300' />
          <p className='ml-4 font-light text-lg text-gray-300'>Archived</p>
        </div></Link>
        <Link to="/manage_accounts"><div className='w-[19.5em] h-14 bg-gray-600/30 mt-4 rounded-l-full flex items-center hover:bg-gray-600/50'>
          <FaCog className='ml-10 w-4 h-4 text-gray-300' />
          <p className='ml-4 font-light text-lg text-gray-300'>Manage Accounts</p>
        </div></Link>
      {/* </div> */}

   </div>
  )
}

export default Sidebar