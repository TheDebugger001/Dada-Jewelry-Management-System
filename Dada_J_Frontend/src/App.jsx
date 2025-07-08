import './App.css'
import { BrowserRouter as Routes, Router, Route } from 'react-router'
import Register_form from './components/pages/Register_form'

function App() {

  return (
    <>
      <div className='w-full min-h-screen  flex items-center justify-center'>
      <div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-700 to-gray-900"
        style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
      ></div>
        <Register_form />
      </div>
    </>
  )
}

export default App