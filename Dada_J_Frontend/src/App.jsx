import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Register_form from './components/pages/Register_form'
import AdminDashboard from './components/pages/AdminDashboard'
import Edit_Note from './components/pages/Edit_Note'
import Sidebar from './components/Sidebar'
import MainLayout from './components/pages/layouts/MainLayout'
import ManageAccounts from './components/pages/ManageAccounts'
import Archived from './components/pages/Archived'

function App() {

  return (
    <>
      <div className='w-full min-h-screen flex items-center justify-center'>
          {/* <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-700 to-gray-900"
          style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
          ></div> */}
          
          {/* Routers */}
          <BrowserRouter>
            <Routes>
              <Route index element={<Register_form />} />
              <Route path='/register' element={<Register_form />} />
              <Route path='/edit_note' element={<Edit_Note />} />
              <Route element={<MainLayout />}>
                <Route path='/admin_dashboard' element={<AdminDashboard />} />
                <Route path='/archived' element={ <Archived /> } />
                <Route path='/manage_accounts' element={<ManageAccounts />} />
              </Route>
            </Routes>
          </BrowserRouter>
          
      </div>
    </>
  )
}

export default App