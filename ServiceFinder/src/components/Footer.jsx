import React from 'react'
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
     <footer className="w-full  border-gray-200 bg-white my-20">
      <div className="max-w-3xl mx-auto px-6 py-5 border-t">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* SUPPORT */}
          <div>
            <p className="text-sm tracking-widest text-gray-400 mb-4">
              SUPPORT
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="hover:text-black cursor-pointer">Contact Us</li>
              <li className="hover:text-black cursor-pointer">Help Center</li>
              <li className="hover:text-black cursor-pointer"></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <p className="text-sm tracking-widest text-gray-400 mb-4">
              COMPANY
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="hover:text-black cursor-pointer">
                Become a FindService Professional
              </li>
              <li className="hover:text-black cursor-pointer">Careers</li>
             
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <p className="text-sm tracking-widest text-gray-400 mb-4">
              LEGAL
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="hover:text-black cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-black cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex md:justify-end items-start gap-4">
            <FaLinkedinIn className='cursor-pointer hover:scale-110' />
           <FaFacebookF className='cursor-pointer hover:scale-110'/>
            <FaInstagram className='cursor-pointer hover:scale-110' />
          </div>

        </div>

      
      </div>
    </footer>
  )
}

export default Footer