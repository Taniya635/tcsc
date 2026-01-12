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

  const feedbackData = [
    {
      id: 1,
      name: "Vishal Yadav",
      location: "Kandivali, Mumbai",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
      feedback:
        "The service was smooth and reliable. I found a professional within minutes."
    },
    {
      id: 2,
      name: "Neha Sharma",
      location: "Andheri, Mumbai",
      image: "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9",
      feedback:
        "Very user-friendly platform. Booking and communication were seamless."
    },
    {
      id: 3,
      name: "Rahul Mehta",
      location: "Borivali, Mumbai",
      image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
      feedback:
        "Quick response and verified professionals. Highly recommended."
    },
    {
      id: 4,
      name: "Anjali Verma",
      location: "Thane, Mumbai",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
      feedback:
        "Loved the experience. The reviews really helped me choose the right service."
    },
    {
      id: 5,
      name: "Amit Kulkarni",
      location: "Mulund, Mumbai",
      image: "https://images.unsplash.com/photo-1603415526960-f7e0328f7b0a",
      feedback:
        "Simple UI and fast results. Saved me a lot of time."
    },
    {
      id: 6,
      name: "Pooja Nair",
      location: "Ghatkopar, Mumbai",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      feedback:
        "Customer support was very helpful. Great platform overall."
    },
    {
      id: 7,
      name: "Karan Malhotra",
      location: "Malad, Mumbai",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      feedback:
        "Professional services at affordable prices. Will use again."
    },
    {
      id: 8,
      name: "Sneha Patil",
      location: "Powai, Mumbai",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
      feedback:
        "Easy booking process and genuine reviews. Very satisfied."
    }
  ];

  function numIncrement() {

  }


  return (
    <div className=" w-full bg-white">

      {/* top */}
      <div className="h-[70vh]  bg-blue-400 flex items-center justify-center gap-5 overflow-hidden">
        <div className="  flex items-start justify-center flex-col w-[50vw]">

          {/* heading */}
          <h1 className="text-6xl text-white">
            Find Trusted Local Services, Instantly.
          </h1>

          {/* paragraph */}
          <p className="text-white mt-5 ">
            Discover verified professionals near you for electrical, plumbing,
            cleaning, tutoring, and more.
          </p>

          {/* button */}
          <div className="flex gap-5 mt-10">
            <Link to="/register">
              <button className="text-2xl bg-[#F25704] px-9 py-2 rounded-xl text-white border hover:scale-105 transition">
                Sign Up
              </button>
            </Link>

            <Link to="/service">
              <button className="text-2xl  px-3 py-2 rounded-xl text-white border hover:scale-105 transition ">
                Our Services
              </button>
            </Link>

          </div>
        </div>

        {/* image */}
        <div className="h-[60vh] mt-15 ">
          <img
            className="h-full object-cover"
            src="public/images/worker.png"
            alt=""
          />
        </div>
      </div>


      {/* card Div*/}
      <div className="w-full flex items-center flex-col mt-10">

        {/* heading */}
        <h1 className="text-6xl text-black font-bold mt-5 text-center">
          Explore Our Services
        </h1>

        {/* paragraph */}
        <p className="text-center text-black mt-5">
          Find skilled and trusted professionals for all your daily needs.
        </p>

        {/* card container */}
        <div className="flex items-center justify-center flex-wrap gap-5 w-[70vw]  my-20 ">
          {servicesData.map((elem, idx) => {
            return <Card data={elem} key={idx} idx={idx} />;
          })}
        </div>

        {/* browse more services button */}
        <Link to="/service" onClick={() =>window.scrollTo({ top: 0, left: 0, behavior: "smooth" })}
          className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-500 rounded-full font-semibold text-gray-800 transition-all duration-300 hover:scale-105 hover:border-blue-600 hover:text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-40">
          Browse More Services
        </Link>


      </div>


      <Footer />
    </div >
  );
}

export default Home;
