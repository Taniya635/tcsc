import React from 'react'
import { useState } from 'react';
import { FaGoogle, FaApple } from "react-icons/fa";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import {Link} from 'react-router-dom';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);

    setEmail('');
    setPassword('');  
  }

  return (
    <div className=' h-[80vh] w-[80vw] mt-10 m-auto p-10 flex items-center justify-center  bg-gradient-to-r from-blue-600 to-blue-100 rounded-xl'>

    {/* leftdiv */}
      <div className='h-full w-full flex items-center justify-center flex-col '>

        {/* image div */}
        <div className=" w-90 ">
          <img
            className="h-full w-full object-cover  hover:scale-105 transition duration-300"
            src="/images/worker.png"
            alt=""
          />
        </div>

          {/* heading */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Local services made simple
        </h2>

        {/* paragraph */}
        <p className=" text-gray-900 text-center text-md leading-relaxed">
          FindService helps you connect with verified local professionals for all your
          daily service needs  fast, safe, and reliable, Trusted by thousands of local service users.
        </p>
        
      </div>

    {/* rigthdiv */}
      <div className='h-full w-full flex items-center flex-col bg-white rounded-xl p-10 justify-center '>

        {/* heading */}
        <h2 className='text-4xl font-bold text-center text-gray-800 mt-10  '>Welcome Back</h2>

        {/* paragraph */}
        <p className='text-sm text-gray-500 text-center mt-3 mb-6 font-semibold'>Glad to see you again, Select methos to log in.</p>

        {/* from */}
        <form onSubmit={submitHandler} className='w-90'>

          {/* input div */}
          <div className='relative mb-4'>
            {/* icon */}
            <HiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' className='w-full h-11 pl-10 pr-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500' />
          </div>

             {/* input div */}
          <div className='relative mb-4'>
            {/* icon */}
            <HiOutlineLockClosed className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='w-full h-11 pl-10 pr-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500' />
          </div>


            {/* checkbox and forgot password */}
          <div className="flex items-center justify-between mt-3 mb-6 text-sm">
            <label className="flex items-center gap-2 text-gray-600 ">
              <input type="checkbox" className="accent-indigo-600 " />
              <span className='font-semibold'>Remember me</span>
            </label>
            
            <p className="text-indigo-600 font-semibold hover:underline">
              Forgot password?
            </p>
          </div>

            {/* submit button */}
          <button 
          type="submit"
          onSubmit={submitHandler}
          className='w-full h-11 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all'>Log in</button>
        </form>


        <div className='flex items-center my-6 '>
          <p className="px-3 text-sm text-gray-400">
            or continue using
          </p>
        </div>

          {/* google and apple login */}
        <div className="flex gap-4">
          <button className="px-4 py-3 border rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition  border-gray-400">
            {/* icon */}
            <FaGoogle />
            Google
          </button>

          <button className="px-4 py-3 border rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition  border-gray-400">
              {/* icon */}
            <FaApple />
            Apple
          </button>

        </div>

          {/* forgot password */}
        <p className="text-sm text-center text-gray-500 mt-6">
          Don’t have an account ?
          <Link to='/register'>
          <span className="text-indigo-600 font-medium cursor-pointer hover:underline pl-2">
            Create an account
          </span>
          </Link>
        </p>


      </div>



    </div>
  )
}

export default Login