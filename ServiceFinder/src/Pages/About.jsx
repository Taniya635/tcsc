import React from 'react'
import Counter from '../components/Counter'
import Footer from '../components/Footer'

function About() {
  return (
      <div className="bg-white text-gray-800">

      {/*  top */}
      <div className="relative bg-blue-600 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-white max-w-2xl mx-auto">
            FindService is a modern platform designed to simplify local service discovery.
          </p>
        </div>
      </div>

      {/* INTRO div */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-3xl font-bold mb-4">
              We Help You Find Everything You Need
            </h2>
            <p className="text-gray-600 mb-4">
              FindService connects users with trusted local service providers such as
              electricians, plumbers, tutors, and mechanics — all in one place.
            </p>
            <p className="text-gray-600">
              Our platform focuses on simplicity, speed, and transparency to help users
              make confident decisions quickly.
            </p>
          </div>

          <div className="bg-orange-500 text-white rounded-2xl p-10 text-center">
            <h3 className="text-4xl font-bold">
              <Counter end={40} duration={2000}/><span className='font-bold'>+</span>
              </h3>
            <p className="mt-2">Service Categories</p>
          </div>

        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            High Quality & Innovative Platform
          </h2>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h4 className="font-semibold mb-2">Smart Search</h4>
              <p className="text-sm text-gray-600">
                Real-time search and filtering for faster results.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Trusted Services</h4>
              <p className="text-sm text-gray-600">
                Verified and structured service information.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Responsive Design</h4>
              <p className="text-sm text-gray-600">
                Works smoothly on all devices.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">User Friendly</h4>
              <p className="text-sm text-gray-600">
                Clean UI built for easy navigation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES div */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Services That We Provide
          </h2>

          <div className="flex items-center justify-center flex-wrap gap-6">
            {[
              "Electricians",
              "Plumbers",
              "Tutors",
              "Mechanics",
              "Home Maintenance",
              "Cleaning Services",
              "IT Support",
              "More Coming Soon",
            ].map((service, index) => (
              <div
                key={index}
                className="border rounded-xl p-6 text-center hover:shadow-lg transition"
              >
                <h4 className="font-semibold">{service}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* stats */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold">
               <Counter end={50} duration={5000}/><span className='font-bold'>K+</span>
            </h3>
            <p className="text-white">Users</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">
              <Counter end={98} duration={2000}/><span className='font-bold'>%+</span>
            </h3>
            <p className="text-white">Satisfaction</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">
              <Counter end={20} duration={5000}/><span className='font-bold'>+</span>
            </h3>
            <p className="text-white">Cities</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">
              <Counter end={30} duration={5000}/><span className='font-bold'>K+</span>
            </h3>
            <p className="text-white">Partners</p>
          </div>
        </div>
      </div>

     
      <Footer />
    </div>
  )
}

export default About