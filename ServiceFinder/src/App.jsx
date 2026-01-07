import { response } from 'express';
import React from 'react'
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
  )
}

export default App