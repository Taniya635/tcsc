import React from 'react'

import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './Pages/Home';
import Service from './Pages/Service';
import About from './Pages/About';
import Login from './Pages/Login';
import Register from './Pages/Register';


function App() {

  return (
   <div className='pt-16'>
    <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/service" element={<Service/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>

    </div>

    


  )
}

export default App