import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from "react";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showpassword, setShowpassword] = useState(false)
    const [remember, setRemember] = useState(false)

    const subitHandler = async (e) => {
        e.preventDefault()

        // Validation
        if (!email || !password) {
            alert('Please enter both email and password');
            return;
        }

        console.log('Logging in with email:', email);

        try {
            const response = await fetch("http://localhost:4000/pages/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
                alert('Login successful!');
                console.log('Success:', data);

                // Store user data in localStorage
                localStorage.setItem('user', JSON.stringify(data.user));
                localStorage.setItem('isLoggedIn', 'true');
                
                if (remember) {
                    localStorage.setItem('rememberMe', 'true');
                }

                // Clear form
                setEmail('');
                setPassword('');
                setRemember(false);

                // Redirect based on user type
                if (data.isWorker) {
                    console.log('Redirecting to worker dashboard...');
                    window.location.href = '/worker-dashboard';
                } else {
                    console.log('Redirecting to home...');
                    window.location.href = '/';
                }

            } else {
                alert("Login failed: " + data.error);
                console.log('Error:', data.error);
            }

        } catch (error) {
            console.log('Error:', error);
            alert("An error occurred! Please try again.");
        }
    }   

    return (
        <div className=' flex items-center justify-center mt-20  lg:mt-5'>

            {/* container div */}
            <div className='w-full max-w-6xl p-3  rounded-xl md:flex items-center justify-center '>

                    {/* left div*/}
                <div className='w-full bg-gray-100 rounded-xl p-10 shadow-2xl z-50 md:w-[50vw] lg:w-[60vw]'>

                    <h2 className='text-3xl md:text-4xl text-gray-800 text-center font-semibold'>Login please</h2>
                    <p className='text-sm text-gray-500 text-center mt-3 mb-6 font-semibold'>Glad to see you again, Select methods to log in</p>

                        {/* form */}
                    <form action="" 
                        onSubmit={subitHandler}
                    >

                        {/* input div */}
                        <div className='relative mb-4'>
                            <HiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                            <input type="email"
                              value={email}
                                onChange={(e)=>{
                                    setEmail(e.target.value)
                                }}
                                placeholder='Email'
                                className='w-full h-11 pl-10 pr-4 rounded-lg border focus: outline-none focus:ring-indigo-500'
                            />
                        </div>

                        <div className='relative mb-4'>
                              <HiOutlineLockClosed className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                            <input 
                                type={showpassword ? 'text': 'password'}
                                value={password}
                                onChange={(e)=>{
                                    setPassword(e.target.value)
                                }}  
                                placeholder='Password'
                                className='w-full h-11 pl-10 pr-4 rounded-lg border focus:outline-none focus:right-2 focus:ring-indigo-500'
                            />

                               {/* password hide btn  */}
                            <button type='button'
                                onClick={()=>setShowpassword(!showpassword)}
                                className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700'
                            >
                            {showpassword ?  <HiOutlineEyeOff size={20} /> :  <HiOutlineEye size={20} />}
                            </button>
                        </div>

                            {/* remember and forgot password */}
                        <div className='flex item-center justify-between mt-3 mb-6 txet-sm'>
                            <label className='flex items-center gap-2 text-gray-600'>
                                <input type="checkbox" 
                                value={remember}
                                onChange={(e)=>{
                                    setRemember(true)
                                }}
                                className='accent-indigo-600 cursor-pointer' />
                                <span className='font-semibold'>Remember me</span>
                            </label>

                            <p className='text-indigo-600 font-semibold hover:underline cursor-pointer'>Forgot password</p>
                        </div>

                        {/* submit btn */}
                        <button type='submit' className='w-full h-11 bg-blue-700 text-white rounded-lg font-semibold hover:shadow-lg cursor-pointer hover:-translate-y-0.5 transition-all '>Log in </button>

                            {/* google and apple icon */}
                        <div className='flex gap-4 justify-center mt-5 flex-wrap'>
                            <div className='px-4 py-3 border rounded-lg flex items-center gap-2 cursor-pointer hover:bg-gray-200 tarnsition border-gray-400'> 
                                  <FcGoogle size={25} />Google
                            </div>
                            <div className='px-4 py-3 border rounded-lg flex items-center gap-2 cursor-pointer hover:bg-gray-200 tarnsition border-gray-400'>
                                 <FaApple size={25} />Apple
                            </div>
                        </div>

                            {/*craete account div*/}
                        <p className='text-sm text-center text-gray-500 mt-6'>Don't have an account ?
                            <Link to='/register'>
                                <span className='text-indigo-500 font-medium hover:underline pl-2'>Create an account</span>
                            </Link>
                        </p>

                    </form>
                </div>

                    {/* right div*/}
                <div className='hidden md:flex min-h-[60vh]  lg:flex min-w-[40vw]   lg:min-h-[80vh]  rounded-xl overflow-hidden  items-center justify-center'
                    // bg image
                    style={{ background: "url('https://img.freepik.com/premium-photo/colors-card-template-curve-gradient-abstract-background_608068-9661.jpg?semt=ais_hybrid&w=740&q=80') ", backgroundSize: "cover", backgroundPosition: "center" }}
                >

                    {/* text and btn */}
                    <div className=' flex items-center justify-center flex-col px-6'>
                        <h1 className='text-2xl font-bold text-white mb-3'>Welcome Back!</h1>
                        <p className='text-sm text-white font-semibold'>Enter your details and start journey with us</p>
                        <Link to='/register'>
                            <button className='bg-blue-700 border-2 text-white px-5 py-2 mt-7 rounded-lg cursor-pointer  hover:shadow-lg hover:-translate-y-0.5 transition-all'>Sign up</button>
                        </Link>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Login