import{Link} from 'react-router-dom'
import { useState } from "react";
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineUser } from "react-icons/hi";

function Register() {
  const [isWorker, setIsWorker] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Create Account
        </h2>
        <p className="text-sm text-gray-500 text-center mt-1 mb-6">
          Join FindService to get started
        </p>

        {/* Name */}
        <div className="relative mb-4">
          <HiOutlineUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Full Name"
            className="w-full h-11 pl-10 pr-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div className="relative mb-4">
          <HiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="email"
            placeholder="Email"
            className="w-full h-11 pl-10 pr-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div className="relative mb-4">
          <HiOutlineLockClosed className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="password"
            placeholder="Password"
            className="w-full h-11 pl-10 pr-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Worker Checkbox */}
        <div className="flex items-center gap-2 mb-4">
          <input
            type="checkbox"
            id="worker"
            checked={isWorker}
            onChange={() => setIsWorker(!isWorker)}
            className="accent-blue-600"
          />
          <label htmlFor="worker" className="text-sm text-gray-700">
            Register as a service provider (Worker)
          </label>
        </div>

        <div
  className={`overflow-hidden transition-all duration-500 ease-in-out
    ${isWorker ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-2"}
  `}
>
  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-4">
    <p className="text-sm font-medium text-blue-700 mb-3">
      Worker Details
    </p>

    <input
      type="text"
      placeholder="Service Category (Electrician, Plumber...)"
      className="w-full h-10 px-3 rounded-md border mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <input
      type="text"
      placeholder="Service Location (City)"
      className="w-full h-10 px-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
</div>


        {/* Register Button */}
        <button className="w-full h-11 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
          {isWorker ? "Register as Worker" : "Register as User"}
        </button>

        {/* Footer */}
        <p className="text-sm text-center text-gray-500 mt-6">
          Already have an account ? <Link to='/login'> <span className="text-blue-600 cursor-pointer hover:underline">
            Log in
          </span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
