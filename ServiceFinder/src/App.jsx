import { response } from 'express';
import React from 'react'
<<<<<<< HEAD
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

    
=======
import { useState } from 'react';
import { useEffect } from 'react';
import { use } from 'react';


function App() {
  const [backendData, setBackendData] =useState([{}]);

  useEffect(()=>{
    fetch("/").then(
      response=> response.json()
    ).then(
      data=> {
        setBackendData(data)
      }
    )
  }, [])
  return (
    <div>
      {(typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>
      ):(
        backendData.users.map((user, i)=>( <p key={i}>{user}</p> ))
      )}
    </div>
>>>>>>> 066d812038bb46daacf8bb5fec21358001034507
  )
}

export default App