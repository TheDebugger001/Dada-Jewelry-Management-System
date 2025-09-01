import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../../Sidebar';


const MainLayout = () => {
  const Location = useLocation();

  const sidebar = location.pathname ==="/sidebar"
  return (
    <div className='w-full flex overflow-hidden'>
      { !sidebar && <Sidebar />}
      <Outlet />
    </div>
  )
}

export default MainLayout