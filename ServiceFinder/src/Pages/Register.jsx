import { useState } from "react";
import { HiOutlineUser, HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { useAuth } from '../context/AuthContext';

function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();
  
  const [isWorker, setIsWorker] = useState(false);

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [serviceCategory, setServiceCategory] = useState("");
  const [serviceLocation, setServiceLocation] = useState("");

  const [showpassword, setShowpassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const submitHandler = async (e) => {
    e.preventDefault(); 
    setError('')
    setLoading(true)

    const userData = {
      name: fullname,
      email: email,
      password: password,
      contact: 0,
      ...(isWorker && {
        service: serviceCategory,
        location: serviceLocation,
        statuss: "offline"
      })
    }

    try {
      const result = await register(userData);

      if (result.success) {
        alert('Registration successful! Please login.');
        
        // Clear form
        setFullname("");
        setEmail("");
        setPassword("");
        setServiceCategory("");
        setServiceLocation("");
        setIsWorker(false);
        
        // Navigate to login page
        navigate('/login');
      } else {
        setError(result.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.log('Error:', error);
      setError("An error occurred! Please try again.");
    } finally {
      setLoading(false)
    }
  }


  return (
    <div className=" flex items-center justify-center mt-20 lg:mt-5">
      
      {/* container */}
      <div className="w-full max-w-6xl p-3 rounded-xl md:flex items-center justify-center">
        
        {/* left side */}

        <div className="hidden md:flex min-h-[60vh] lg:flex min-w-[40vw] lg:min-h-[80vh] rounded-xl overflow-hidden items-center justify-center"
          // bg image
            style={{ background: "url('https://img.freepik.com/premium-photo/colors-card-template-curve-gradient-abstract-background_608068-9661.jpg?semt=ais_hybrid&w=740&q=80') ", backgroundSize: "cover", backgroundPosition: "center" }}
         >

        <div className="flex items-center justify-center flex-col px-6">
         {/* heading */}
          <h2 className="text-2xl font-bold text-white mb-3">
            Join FindService Today
          </h2>

          {/* paragraph */}
          <p className="text-white max-w-md text-center">
            Create an account to book trusted local services or register as a
            professional and grow your business with us.
          </p>
          </div>

        </div>

        {/* rigth side */}

           <div className="w-full bg-gray-100 rounded-xl p-10 shadow-2xl z-50 md:w-[50vw] lg:w-[60vw]">

          {/* heading */}
          <h2 className="text-3xl md:text-4xl text-gray-800 text-center font-semibold">
            Create Account
          </h2>
          <p className="text-sm text-gray-500 text-center mt-3 mb-6 font-semibold">
            Join FindService to get started
          </p>

          {/* Error message */}
          {error && (
            <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4'>
              {error}
            </div>
          )}

          {/* form */}
          <form>

            {/* Name */}
            <div className="relative mb-4">
              <HiOutlineUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="text"
                placeholder="Full Name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                className="w-full h-11 pl-10 pr-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Email */}
            <div className="relative mb-4">
              <HiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-11 pl-10 pr-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Password */}
            <div className="relative mb-4">
              <HiOutlineLockClosed className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type={showpassword ?'text': 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-11 pl-10 pr-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

            <button type='button' onClick={()=>{
              setShowpassword(!showpassword)
            }}
            className="absolute right-5 top-1/2 -translate-y-3 text-gray-500 hover:text-gray-700">
              {showpassword ?<HiOutlineEyeOff size={20} /> :  <HiOutlineEye size={20} /> }
            </button>

            </div>

            {/* Worker Checkbox */}
            <label className="flex items-center gap-2 text-sm text-gray-700 mb-4 cursor-pointer">
              <input
                type="checkbox"
                checked={isWorker}
                onChange={() => setIsWorker(!isWorker)}
                className="accent-indigo-600"
              />
              <span className="font-semibold">Register as a service provider </span>
            </label>

            {/* Worker Details */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out
              ${isWorker ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
            >
              {/* worker details input */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <input
                  type="text"
                  placeholder="Service Category "
                  value={serviceCategory}
                  onChange={(e) => setServiceCategory(e.target.value)}
                  className="w-full h-10 px-3 rounded-md border mb-3"
                />
                <input
                  type="text"
                  placeholder="Service Location (City)"
                  value={serviceLocation}
                  onChange={(e) => setServiceLocation(e.target.value)}
                  className="w-full h-10 px-3 rounded-md border"
                />
              </div>
            </div>

            {/* Button */}
            
              <button 
                type="submit" 
                onClick={submitHandler}
                disabled={loading}
                className="w-full h-11 bg-blue-700 text-white rounded-lg font-semibold hover:shadow-lg cursor-pointer hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Registering...' : (isWorker ? "Register as Worker" : "Register as User")}
              </button>
            
          </form>

          {/* already have an account */}
          <p className="text-sm text-center text-gray-500 mt-6">
            Already have an account?
            <Link to="/login">
              <span className="text-indigo-600 font-medium hover:underline pl-2">
                Log in
              </span>
            </Link>
          </p>
        </div>


       
      
          
      </div>
     </div> 
    
  );
}

export default Register;
