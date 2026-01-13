import { useState } from "react";
import { HiOutlineUser, HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";

function Register() {
  const [isWorker, setIsWorker] = useState(false);

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [serviceCategory, setServiceCategory] = useState("");
  const [serviceLocation, setServiceLocation] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault(); 

    const userData={
      name:fullname,
      email:email,
      password:password,
      contact:0,
      ...(isWorker && {
        service:serviceCategory,
        location:serviceLocation,
        statuss:"offline"
      })
    }
  
    console.log('fullname:', fullname);
    console.log('email:', email);
    console.log('password:', password);

    try{
      const response= await fetch("http://localhost:4000/api/adduser",{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(userData),
      })
      const data=await response.json();

      if(response.ok){
        alert('Registration successful!');
        console.log('Success:',data);

        setFullname("");
        setEmail("");
        setPassword("");
        setServiceCategory("");
        setServiceLocation("");
        setIsWorker(false);
        
      }else{
        alert("Registration failed: "+data.error);
        console.log('Error:',data.error);
        
      }
    }catch(error){
      console.log('Error:',error);
      alert("An error occurred!");
      
    }

  }


  return (
    <div className="  h-[80vh] w-[80vw] mt-10 m-auto p-10 flex items-center justify-center  bg-gradient-to-r from-blue-600 to-blue-100 rounded-xl">
      
        {/* left side */}

         <div className="w-full lg:w-1/2 bg-white rounded-xl p-6 md:p-10 flex flex-col justify-center">

          {/* heading */}
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
            Create Account
          </h2>
          <p className="text-sm text-gray-500 text-center mb-8">
            Join FindService to get started
          </p>

          {/* form */}
          <form className="max-w-sm mx-auto w-full">

            {/* Name */}
            <div className="relative mb-4">
              <HiOutlineUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
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
              <HiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
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
              <HiOutlineLockClosed className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-11 pl-10 pr-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Worker Checkbox */}
            <label className="flex items-center gap-2 text-sm text-gray-700 mb-4 cursor-pointer">
              <input
                type="checkbox"
                checked={isWorker}
                onChange={() => setIsWorker(!isWorker)}
                className="accent-indigo-600"
              />
              Register as a service provider (Worker)
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
                  placeholder="Service Category"
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
            
              <button type="submit" onClick={submitHandler}
              className="w-full h-11 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition">
              {isWorker ? "Register as Worker" : "Register as User"}
            </button>
            
          </form>

          {/* Footer */}
          <p className="text-sm text-center text-gray-500 mt-6">
            Already have an account?
            <Link to="/login">
              <span className="text-indigo-600 font-medium hover:underline pl-2">
                Log in
              </span>
            </Link>
          </p>
        </div>

        {/* rigth side */}

         <div className="flex w-1/2 flex-col items-center justify-center text-center">

        {/* image div */}
        <div className="w-80 mb-6">
          <img
            src="/images/worker.png"
            alt="Worker"
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
          />
          </div>

         {/* heading */}
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Join FindService Today
          </h2>

          {/* paragraph */}
          <p className="text-gray-800 max-w-md">
            Create an account to book trusted local services or register as a
            professional and grow your business with us.
          </p>
        </div>
      
          
      </div>
    
  );
}

export default Register;
