import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Card from './components/Card'
import Navbar from './components/Navbar';

import Home from './Pages/Home';
import Service from './Pages/Service';
import About from './Pages/About';
import Login from './Pages/Login';

function App() {

  return (
   <div>
    <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/service" element={<Service/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>

    </div>

    
  )
}

export default App