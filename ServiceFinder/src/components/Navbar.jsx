import { NavLink } from "react-router-dom";
import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";

function Navbar() {

  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) => {
    return `block py-2 px-3 font-semibold rounded transition hover:text-blue-700 hover:scale-105
    ${isActive ? 'text-blue-700 border border-blue-700 ' : 'text-gray-700'}
  `}

  return (
    <>
      <div className="w-full bg-[#F3F4F6] shadow z-50 fixed h-16 top-0 left-0">

        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

          {/* logo */}
          <NavLink to="/" className='h-10'>
            <img
              className="h-full object-cover"
              src="public/images/logo.png"
              alt=""
            />
          </NavLink>

          {/* desktop */}
          <div className="hidden md:flex gap-6 font-medium">
            <NavLink to='/' className={linkClass}>Home</NavLink>
            <NavLink to='/service' className={linkClass}>Services</NavLink>
            <NavLink to='about' className={linkClass} >About</NavLink>
            <NavLink to='login' className={linkClass}>Login</NavLink>
          </div>

          {/* menu btn */}
          <button onClick={() => {
            setOpen(!open)
          }}
            className="md:hidden text-2xl text-gary-700"
          >
            <HiMenu />
          </button>
        </div>
      </div>



      <div onClick={() => setOpen(false)}
        className={`fixed insert-0 bg-white z-40 transition-opacity ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      ></div>

      {/* container div */}
      <div className={`fixed top-0 right-0 h-full w-full bg-white z-50  transform transition-transform duration-300 ease-in-out
          ${open ? 'translate-x-0' : 'translate-x-full'}
          `}>

        {/* cross and menu */}
        <div className="flex items-center justify-between p-5 border">

          <h2 className="text-3xl font-semibold">Menu</h2>

          <button onClick={() => setOpen(false)} className="text-3xl text-gray-700">
            <HiX />
          </button>
        </div>

        {/* link */}
        <div className=' flex flex-col gap-4 '>

          <div className="flex flex-col items-start gap-2 m-5">
            <NavLink onClick={() => setOpen(false)} to='/' className={`${linkClass} text-2xl rounded-lg px-4 py-2 border-none hover:text-blue-700`} >Home</NavLink>
            <NavLink onClick={() => setOpen(false)} to='/service' className={`${linkClass} text-2xl rounded-lg px-4 py-3 border-none`}>Services</NavLink>
            <NavLink onClick={() => setOpen(false)} to='/about' className={`${linkClass} text-2xl rounded-lg px-4 py-3 border-none`}>About</NavLink>
            <NavLink onClick={() => setOpen(false)} to='/login' className={`${linkClass} text-2xl rounded-lg px-4 py-3 border-none`}>Login</NavLink>
          </div>
        </div>

      </div>


    </>
  );
}

export default Navbar;
