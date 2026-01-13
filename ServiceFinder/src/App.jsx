import React from 'react'

import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './Pages/Home';
import Service from './Pages/Service';
import About from './Pages/About';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { AuthProvider } from './context/AuthContext';


function App() {

  return (
   <AuthProvider>
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
    </AuthProvider>
  )
}

export default App