import React from 'react'
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full bg-white mt-20 ">

      {/* container div */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 border-t " >

        {/* element div */}
        <div className="flex flex-col sm:flex-row  flex-wrap items-center sm:items-start justify-center sm:justify-between gap-10 text-sm text-center sm:text-left">

          {/* support */}
          <div>
            <p className="tracking-widest text-gray-400 mb-4 transition hover:text-gray-600 ">
              SUPPORT
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="cursor-pointer transition hover:text-blue-600 hover:translate-x-1">
                Contact Us
              </li>
              <li className="cursor-pointer transition hover:text-blue-600 hover:translate-x-1">
                Help Center
              </li>
            </ul>
          </div>

          {/* company */}
          <div>
            <p className="tracking-widest text-gray-400 mb-4 hover:text-gray-600 transition">
              COMPANY
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="cursor-pointer transition hover:text-blue-600 hover:translate-x-1">
                Become a Professional
              </li>
              <li className="cursor-pointer transition hover:text-blue-600 hover:translate-x-1">
                Careers
              </li>
            </ul>
          </div>

          {/* legal */}
          <div>
            <p className="tracking-widest text-gray-400 mb-4 hover:text-gray-600 transition">
              LEGAL
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="cursor-pointer transition hover:text-blue-600 hover:translate-x-1">
                Terms & Conditions
              </li>
              <li className="cursor-pointer transition hover:text-blue-600 hover:translate-x-1">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* social icon*/}
          <div className="flex items-center gap-4 text-gray-600">
            <FaLinkedinIn className="cursor-pointer transition hover:text-blue-600 hover:scale-150" />
            <FaFacebookF className="cursor-pointer transition hover:text-blue-600 hover:scale-150" />
            <FaInstagram className="cursor-pointer transition hover:text-pink-500 hover:scale-150" />
          </div>

        </div>
      </div>

    </div>

  )
}

export default Footer