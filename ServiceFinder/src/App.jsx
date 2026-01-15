import React from 'react'

import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './Pages/Home';
import Service from './Pages/Service';
import About from './Pages/About';
import Login from './Pages/Login';
import Register from './Pages/Register';
import WorkerDashboard from './Pages/WorkerDashboard';
import UserDashboard from './Pages/UserDashboard';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Feedback from './Pages/Feedback';


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
        <Route path="/feedback" element={<Feedback/>} />
        
        {/* Protected Routes */}
        <Route 
          path="/worker-dashboard" 
          element={
            <ProtectedRoute>
              <WorkerDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>

      </div>
    </AuthProvider>
  )
}

export default App