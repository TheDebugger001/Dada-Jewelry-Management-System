import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Register_form from './components/pages/Register_form'
import AdminDashboard from './components/pages/AdminDashboard'

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
              <Route path='/admin_dashboard' element={<AdminDashboard />} />
            </Routes>
          </BrowserRouter>
          
      </div>
    </>
  )
}

export default App