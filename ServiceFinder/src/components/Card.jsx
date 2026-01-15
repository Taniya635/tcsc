import React from "react";
import { FaStar } from "react-icons/fa6";
import { ImLocation2 } from "react-icons/im";
import { MdEmail, MdPhone } from "react-icons/md";
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

  // Provide default values for missing fields
  const cardData = {
    name: data.name || 'Service Provider',
    email: data.email || '',
    service: data.service || 'Service',
    location: data.location || 'Location not specified',
    statuss: data.statuss || 'offline',
    contact: data.contact || null,
    image: data.image || 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop',
    rating: data.rating || 4.0,
    reviews: data.reviews || 0,
  };

  return (
    <div className="w-full sm:w-72 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-gray-100">

      {/* Top Row */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-semibold bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
          {cardData.service}
        </span>

        {/* availability status */}
        <span
          className={`flex items-center text-xs font-semibold ${
            cardData.statuss === "online"
              ? "text-green-700"
              : cardData.statuss === "busy"
              ? "text-yellow-600"
              : "text-gray-500"
          }`}
        >
          {/* availability animation */}
          <span className="relative flex items-center justify-center h-3 w-3 mr-2">
            <span
              className={`${
                cardData.statuss === "online"
                  ? "animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-80"
                  : cardData.statuss === "busy"
                  ? "animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-80"
                  : "absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-80"
              }`}
            ></span>

            <span
              className={`${
                cardData.statuss === "online"
                  ? "relative inline-flex rounded-full h-3 w-3 bg-green-600"
                  : cardData.statuss === "busy"
                  ? "relative inline-flex rounded-full h-3 w-3 bg-yellow-600"
                  : "relative inline-flex rounded-full h-3 w-3 bg-gray-500"
              }`}
            ></span>
          </span>
          {cardData.statuss.charAt(0).toUpperCase() + cardData.statuss.slice(1)}
        </span>
      </div>

      {/* Image */}
      <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-blue-100">
        <img
          src={cardData.image}
          alt={cardData.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Service Provider Name */}
      <h2 className="text-lg font-bold text-gray-800 mb-2 text-center">
        {cardData.name}
      </h2>

      {/* Rating */}
      <div className="flex items-center justify-center gap-1 text-sm mb-3">
        <FaStar className="text-yellow-500" />
        <span className="font-semibold">{cardData.rating.toFixed(1)}</span>
        <span className="text-gray-500">({cardData.reviews} reviews)</span>
      </div>

      {/* Info Section */}
      <div className="space-y-2 mb-4">
        {/* Location */}
        {cardData.location && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <ImLocation2 className="text-orange-500 text-base flex-shrink-0" />
            <span className="truncate">{cardData.location}</span>
          </div>
        )}

        {/* Email */}
        {cardData.email && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MdEmail className="text-blue-600 text-base flex-shrink-0" />
            <span className="truncate">{cardData.email}</span>
          </div>
        )}

        {/* Contact */}
        {cardData.contact && cardData.contact > 0 && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MdPhone className="text-green-600 text-base flex-shrink-0" />
            <span>{cardData.contact}</span>
          </div>
        )}
      </div>
      {/* Actions */}
      <div className="flex flex-col gap-2 mt-4">
        <button 
          onClick={handleBookNow}
          className="w-full px-4 py-2.5 bg-blue-700 text-white text-sm font-semibold rounded-lg hover:bg-blue-800 transition-colors"
        >
          Book Now
        </button>

        <Link to={`/services/${data._id || idx}`} className="w-full">
          <button className="w-full px-4 py-2.5 border-2 border-blue-600 text-blue-600 text-sm font-semibold rounded-lg hover:bg-blue-50 transition-colors">
            View Profile
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
