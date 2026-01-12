import React from 'react'

import { Route, Routes } from 'react-router-dom';
import Card from './components/Card';
import Navbar from './components/Navbar';
import CardDetails from './components/CardDetails';

import Home from './Pages/Home';
import Service from './Pages/Service';
import About from './Pages/About';
import Login from './Pages/Login';
import Register from './Pages/Register';


function App() {

  return (
   <div>
    <Navbar/>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/service" element={<Service/>} />
      <Route path="/service/:id" element={<CardDetails/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>

    </div>

    


  )
}

export default App