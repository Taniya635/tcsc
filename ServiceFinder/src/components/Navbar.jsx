import { NavLink } from "react-router-dom";


function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center   px-10  py-2  bg-[#F3F4F6]  shadow z-50">
      
      {/* logo */}
      <div className=" h-10 ">
        <img
          className="h-full w-full object-cover"
          src="public/images/logo.png"
          alt=""
        />
      </div>

      {/* navlink */}
      <div className="flex gap-6 font-medium ">
        <NavLink
          to="/"
          className={({ isActive }) => `hover:scale-110 py-2 px-2 font-semibold rounded  hover:text-blue-700  ${isActive ? 'text-blue-700 border-blue-700 border-2'
            : 'text-gray-700'}`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/service"
          className={({ isActive }) => `hover:scale-110 py-2 px-2 font-semibold rounded hover:text-blue-700  ${isActive ? 'text-blue-700 border-blue-700 border-2'
            : 'text-gray-700'}`
          }
        >
          Services
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => `hover:scale-110 py-2 px-2 font-semibold rounded hover:text-blue-700   ${isActive ? 'text-blue-700 border-blue-700 border-2'
            : 'text-gray-700'}`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) => `hover:scale-110 py-2 px-2 font-semibold rounded hover:text-blue-700   ${isActive ? 'text-blue-700 border-blue-700 border-2'
            : 'text-gray-700'}`
          }
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
