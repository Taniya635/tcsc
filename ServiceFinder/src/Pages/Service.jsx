import React from 'react'
import { FaFilter } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

function Service() {
  return (
    <div className="flex items-center gap-3 bg-amber-400">
      <div className="relative mt-10">
        <input
          type="text"
          placeholder="Search services..."
          className="h-10 w-100 px-12 rounded-full border text-gray-700 text-xl focus:outline-none focus:ring-1 focus:ring-blue-700"
        />

        <IoSearch className="absolute right-5 top-1/2 -translate-y-1/2 text-blue-700 text-3xl" />
      </div>

      <button className="h-12 w-12 flex items-center justify-center rounded-full  hover:bg-blue-200 hover:border-2 border-blue-700 transition">
        <FaFilter className="text-xl text-blue-700 hover:scale-80 transition" />
      </button>
    </div>

  )
}

export default Service