import React from "react";
import { FaStar } from "react-icons/fa6";
import { ImLocation2 } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Card({ data, idx }) {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleBookNow = () => {
    if (!isLoggedIn) {
      alert('Please login to book a service');
      navigate('/login');
    } else {
      // Implement booking logic here
      alert('Booking feature coming soon!');
    }
  };

  return (
    <div className="w-full sm:w-72 bg-gray-100 rounded-3xl shadow-md hover:shadow-lg transition p-6 sm:p-6">

      {/* Top Row */}
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm sm:text-sm  font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
          {data.category}
        </span>

          {/* availability text */}
        <span
          className={`flex items-center text-xs sm:text-sm font-semibold ${data.availability == "online"
            ? "text-green-700"
            : `${data.availability === "busy"
              ? "text-yellow-600"
              : "text-gray-500"
            }`
            } `}
        >

          {/* availability animation */}
          <span className="relative flex items-center justify-center h-3 w-3 mr-2">
            <span
              className={`${data.availability === "online"
                ? "animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-80"
                : `${data.availability === "busy"
                  ? "animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-80"
                  : " absolute inline-flex h-full w-full rounded-full bg-gray-500 opacity-80"
                }`
                }  `}
            ></span>

               {/* availability animation div*/} 
            <span
              className={`${data.availability === "online"
                ? "relative inline-flex rounded-full h-3 w-3 bg-green-600"
                : `${data.availability === "busy"
                  ? "relative inline-flex rounded-full h-3 w-3 bg-yellow-600"
                  : "relative inline-flex rounded-full h-3 w-3 bg-gray-500"
                }`
                }  `}
            ></span>

          {/* availability status */} 
          </span>
          {data.availability}
        </span>
                
      </div>

      {/* Image */}
      <div className="w-25 h-25 sm:w-25 sm:h-25 rounded-full overflow-hidden mx-auto">
        <img
          src={data.image}
          alt="Electrician service"
          className="w-full h-full object-cover "
        />
      </div>

      {/* Service Name */}
      <h2 className="text-base sm:text-lg font-bold text-gray-800 my-2 text-center">
        {data.name}
      </h2>

      {/* Rating */}
      <p className="flex items-center justify-center sm:justify-start gap-1 text-sm  mb-1">
        <FaStar className="text-yellow-500" />
        <span>{data.rating}</span>
        <span className="text-gray-500">({data.reviews} reviews)</span>
      </p>

      {/* Location */}
      <p className="flex items-center justify-center sm:justify-start gap-1 text-sm  mb-1">
        <ImLocation2 className="text-[#F25704]" />
        <span className="text-gray-500">{data.location}</span>
      </p>

      {/* Description  */}
      <p className="text-sm text-gray-700 mb-4 text-center sm:text-left ">{data.description}</p>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row justify-center gap-5">

        <Link to={`/services/${idx}`} className="w-full sm:w-auto">
          <button className="w-full px-3  bg-blue-600 text-white text-sm py-2 rounded-lg hover:bg-blue-700">
            View Details
          </button>
        </Link>


        <button 
          onClick={handleBookNow}
          className="w-full sm:w-auto px-2 border border-blue-600 text-blue-600 text-sm py-2 rounded-lg hover:bg-blue-50"
        >
          Book Now
        </button>
        
      </div>
    </div>
  );
}

export default Card;
