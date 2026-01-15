import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX, HiUser } from "react-icons/hi";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, isLoggedIn, logout, isWorker } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate('/login');
  };

  const handleDashboardClick = () => {
    setOpen(false);
    if (isWorker) {
      navigate('/worker-dashboard');
    } else {
      navigate('/dashboard');
    }
  };

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
          <div className="hidden md:flex gap-6 font-medium items-center">
            <NavLink to='/' className={linkClass}>Home</NavLink>
            <NavLink to='/service' className={linkClass}>Services</NavLink>
            <NavLink to='about' className={linkClass}>About</NavLink>
            
            {isLoggedIn ? (
              <>
                <button 
                  onClick={handleDashboardClick}
                  className="block py-2 px-3 font-semibold rounded transition hover:text-blue-700 hover:scale-105 text-gray-700"
                >
                  Dashboard
                </button>
                <div className="flex items-center gap-3 bg-gray-200 rounded-lg px-3 py-2">
                  <HiUser className="text-blue-700 text-xl" />
                  <span className="text-gray-700 font-semibold">
                    {user?.name?.split(' ')[0] || 'User'}
                  </span>
                  <button 
                    onClick={handleLogout}
                    className="ml-2 py-1 px-3 text-sm font-semibold rounded transition bg-red-600 text-white hover:bg-red-700"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <NavLink to='login' className={linkClass}>Login</NavLink>
            )}
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
        <div className='flex flex-col gap-4'>

          <div className="flex flex-col items-start gap-2 m-5">
            <NavLink onClick={() => setOpen(false)} to='/' className={`${linkClass} text-2xl rounded-lg px-4 py-2 border-none hover:text-blue-700`}>Home</NavLink>
            <NavLink onClick={() => setOpen(false)} to='/service' className={`${linkClass} text-2xl rounded-lg px-4 py-3 border-none`}>Services</NavLink>
            <NavLink onClick={() => setOpen(false)} to='/about' className={`${linkClass} text-2xl rounded-lg px-4 py-3 border-none`}>About</NavLink>
            
            {isLoggedIn ? (
              <>
                <button 
                  onClick={handleDashboardClick}
                  className="text-2xl rounded-lg px-4 py-3 font-semibold text-gray-700 hover:text-blue-700 text-left"
                >
                  Dashboard
                </button>
                <div className="px-4 py-3 bg-gray-100 rounded-lg mx-4">
                  <div className="flex items-center gap-2 mb-3">
                    <HiUser className="text-blue-700 text-2xl" />
                    <p className="text-gray-700 font-semibold text-lg">
                      {user?.name || 'User'}
                    </p>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{user?.email}</p>
                  <button 
                    onClick={handleLogout}
                    className="w-full py-2 px-4 font-semibold rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <NavLink onClick={() => setOpen(false)} to='/login' className={`${linkClass} text-2xl rounded-lg px-4 py-3 border-none`}>Login</NavLink>
            )}
          </div>
        </div>

      </div>


    </>
  );
}

export default Navbar;
