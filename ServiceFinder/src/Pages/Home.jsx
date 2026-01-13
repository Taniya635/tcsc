import React from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  const servicesData = [
    {
      id: 1,
      name: "Vishal Electrical Services",
      category: "Electrician",
      description: "Home wiring and electrical repairs.",
      location: "Kandivali, Mumbai",
      availability: "online",
      rating: 4.5,
      reviews: 120,
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Rahul Plumbing Works",
      category: "Plumber",
      description: "Reliable plumbing solutions.",
      location: "Borivali, Mumbai",
      availability: "busy",
      rating: 4.2,
      reviews: 85,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Neha Home Tutoring",
      category: "Tutor",
      description: "Personalized tutoring for students.",
      location: "Thane, Mumbai",
      availability: "online",
      rating: 4.8,
      reviews: 150,
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Rahul Plumbing Works",
      category: "Plumber",
      description: "Reliable plumbing solutions.",
      location: "Borivali, Mumbai",
      availability: "busy",
      rating: 4.2,
      reviews: 85,
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      name: "Amit AC Repair & Services",
      category: "AC Repair",
      description: "AC servicing and maintenance.",
      location: "Andheri, Mumbai",
      availability: "offline",
      rating: 4.3,
      reviews: 60,
      image:
        "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      name: "Suresh Home Cleaning",
      category: "Cleaning",
      description: "Professional home cleaning services.",
      location: "Malad, Mumbai",
      availability: "online",
      rating: 4.6,
      reviews: 95,
      image:
        "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];



  return (
    <div className=" w-full bg-white">

      {/* top */}
      <div className="min-h-[70vh]  bg-blue-400 flex flex-col lg:flex-row  items-center justify-center px-6 lg:px-20 gap-10 overflow-hidden ">
        <div className="  flex flex-col w-full lg:w-1/2 text-center lg:text-left items-start justify-center  ">

          {/* heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-6xl  text-white font-bold">
            Find Trusted Local Services, Instantly.
          </h1>

          {/* paragraph */}
          <p className="text-white mt-4 text-sm sm:text-base ">
            Discover verified professionals near you for electrical, plumbing,
            cleaning, tutoring, and more.
          </p>

          {/* button */}
          <div className="flex   w-full  sm:flex-row gap-10 mt-8 justify-center lg:justify-start">
            <Link to="/register">
              <button className="text-lg bg-[#F25704]  px-8 py-2 rounded-xl text-white border hover:scale-105 transition">
                Sign Up
              </button>
            </Link>

            <Link to="/service">
              <button className="text-lg px-5  py-2 rounded-xl text-white border hover:scale-105 transition ">
                Our Services
              </button>
            </Link>

          </div>
        </div>

        {/* image */}
        <div className="hidden lg:block h-[55vh]">
          <img
            className="h-full object-cover"
            src="public/images/worker.png"
            alt=""
          />
        </div>
      </div>


      {/* card Div*/}
      <div className="w-full flex flex-col items-center  mt-16 px-4">

        {/* heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-black font-bold text-center">
          Explore Our Services
        </h1>

        {/* paragraph */}
        <p className="text-center text-gray-600 mt-4 max-w-xl">
          Find skilled and trusted professionals for all your daily needs.
        </p>

        {/* card container */}
        <div className="flex  justify-center flex-wrap gap-6 w-full my-16 lg:w-[70vw] ">
          {servicesData.map((elem, idx) => {
            return <Card data={elem} key={idx} idx={idx} />;
          })}
        </div>

        {/* browse more services button */}
        <Link to="/service" onClick={() =>window.scrollTo({ top: 0,  behavior: "smooth" })}
          className="mb-16 inline-flex items-center justify-center px-6 py-3 border-2 border-gray-500 rounded-full font-semibold text-gray-800 transition duration-100 hover:scale-105 hover:border-blue-600 hover:text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-40">
          Browse More Services
        </Link>


      </div>


      <Footer />
    </div >
  );
}

export default Home;
