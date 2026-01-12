import React from 'react'
import { FaGoogle, FaApple } from "react-icons/fa";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import {Link} from 'react-router-dom';

function Login() {
  return (
    <div className=' h-[80vh] w-[80vw] mt-10 m-auto p-10 flex items-center justify-center  bg-gradient-to-r from-blue-600 to-blue-100 rounded-xl'>

    {/* leftdiv */}
      <div className='h-full w-full flex items-center justify-center flex-col '>
        <div className=" w-90 ">
          <img
            className="h-full w-full object-cover  hover:scale-105 transition duration-300"
            src="public/images/worker.png"
            alt=""
          />
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3">
          Local services made simple
        </h2>
        <p className=" text-gray-900 text-center text-md leading-relaxed">
          FindService helps you connect with verified local professionals for all your
          daily service needs  fast, safe, and reliable, Trusted by thousands of local service users.
        </p>
        
      </div>

    {/* rigthdiv */}
      <div className='h-full w-full flex items-center flex-col '>

        <h2 className='text-4xl font-bold text-center text-gray-800 mt-10  '>Welcome Back</h2>
        <p className='text-sm text-gray-500 text-center mt-3 mb-6 font-semibold'>Glad to see you again, Select methos to log in.</p>

        {/* from */}
        <form action="" className='w-90'>
          <div className='relative mb-4'>
            <HiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <input type="email" placeholder='Email' className='w-full h-11 pl-10 pr-4 rounded-lg border bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500' />
          </div>

          <div className='relative mb-4'>
            <HiOutlineLockClosed className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <input type="password" placeholder='Password' className='w-full h-11 pl-10 pr-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500' />
          </div>

          <div className="flex items-center justify-between mt-3 mb-6 text-sm">
            <p className="flex items-center gap-2 text-gray-600 ">
              <input type="checkbox" className="accent-indigo-600 " />
              <p className='font-semibold'>Remember me</p>
            </p>
            <p className="text-indigo-600 font-semibold hover:underline">
              Forgot password?
            </p>
          </div>

          <button className='w-full h-11 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all'>Log in</button>
        </form>


        <div className='flex items-center my-6 '>
          <p className="px-3 text-sm text-gray-400">
            or continue using
          </p>
        </div>

        <div className="flex gap-4">
          <button className="px-4 py-3 border rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition  border-gray-400">
            <FaGoogle />
            Google
          </button>
          <button className="px-4 py-3 border rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition  border-gray-400">
            <FaApple />
            Apple
          </button>
        </div>


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