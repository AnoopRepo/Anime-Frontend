import React from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import About from './Component/About'
import {Routes,Route} from 'react-router-dom'
import Admin from './Pages/Admin'
import Contact from './Component/Contact'


const App = () => {
  return (
    <div className='bg-black  w-screen h-screen '>
        <Navbar/>
      <Routes>
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/Admine" element={<Admin/>} />
      </Routes>
    </div>
  )
}

export default App
