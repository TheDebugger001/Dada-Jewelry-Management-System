import './App.css'
import { BrowserRouter as Routes, Router, Route } from 'react-router'
import Register_form from './components/pages/Register_form'

function App() {

  return (
    <>
      <div className='w-full min-h-screen bg-gray-200 flex items-center justify-center'>
        <Register_form />
      </div>
    </>
  )
}

export default App