import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import Footer from "../components/Footer";

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
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop",
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
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop",
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
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop",
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
        "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=687&auto=format&fit=crop",
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
        "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=687&auto=format&fit=crop",
    },
  ];

  return (
    <div className="w-full overflow-x-hidden">
      
      <div className="relative min-h-[50vh] w-full overflow-hidden flex items-center justify-center md:min-h-[50vh] lg:min-h-[70vh]">
        {/* video */}
        <video
          src="/images/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* overlay */}
        <div className="absolute inset-0 bg-[#00000043]"></div>

        {/* slogan */}
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl text-white font-bold">
            Find Trusted Local Services, Instantly.
          </h1>

          <p className="text-white mt-4 text-sm sm:text-base">
            Discover verified professionals near you for electrical, plumbing,
            cleaning, tutoring, and more.
          </p>

          <div className="mt-8 flex justify-center gap-6 ">
            <Link to="/register">
              <button className="text-lg bg-[#F25704] px-8 py-2 rounded-xl text-white font-semibold hover:scale-105 transition">
                Sign Up
              </button>
            </Link>

            <Link to="/service">
              <button className="text-lg px-6 py-2 rounded-xl text-white font-semibold  border hover:scale-105 transition">
                Our Services
              </button>
            </Link>
          </div>
        </div>
      </div>

    {/* explore our services */}
      <div className="w-full flex flex-col items-center mt-16 px-4">

        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-black font-bold text-center">
          Explore Our Services
        </h1>

        <p className="text-center text-gray-600 mt-4 max-w-xl">
          Find skilled and trusted professionals for all your daily needs.
        </p>

        <div className="flex justify-center flex-wrap gap-6 w-full my-16 lg:w-[70vw]">
          {servicesData.map((service, idx) => (
            <Card key={service.id} data={service} idx={idx} />
          ))}
        </div>

        <Link
          to="/service"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mb-16 inline-flex items-center justify-center px-6 py-3 border-2 border-gray-500 rounded-full font-semibold text-gray-800 transition hover:scale-105 hover:border-blue-600 hover:text-blue-600"
        >
          Browse More Services
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
