import React from 'react'
import Counter from '../components/Counter'

function About() {
  return (
      <div className="bg-white text-gray-800">



      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            FindService is a modern platform designed to simplify local service discovery.
          </p>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-16">
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
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-gray-50 py-16">
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
      </section>

      {/* SERVICES SECTION */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Services That We Provide
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
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
      </section>

      {/* PROJECTS / PLATFORM STATS */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold">
               <Counter end={50} duration={5000}/><span className='font-bold'>K+</span>
            </h3>
            <p className="text-gray-400">Users</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">
              <Counter end={98} duration={2000}/><span className='font-bold'>%+</span>
            </h3>
            <p className="text-gray-400">Satisfaction</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">
              <Counter end={20} duration={5000}/><span className='font-bold'>+</span>
            </h3>
            <p className="text-gray-400">Cities</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">
              <Counter end={30} duration={5000}/><span className='font-bold'>K+</span>
            </h3>
            <p className="text-gray-400">Partners</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Happy Users</h2>
          <p className="text-gray-600">
            “FindService helped me quickly find a reliable electrician in my area.
            The experience was smooth and stress-free.”
          </p>
          <p className="mt-4 font-semibold">— Verified User</p>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our Leadership
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {["Product Lead", "Tech Lead", "Design Lead"].map((role, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <h4 className="font-semibold">Team Member</h4>
                <p className="text-sm text-gray-600">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default About