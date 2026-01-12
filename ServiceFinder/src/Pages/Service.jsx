import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import Card from '../components/Card';
import Footer from '../components/Footer';

function Service() {

  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {  
    setSearch(e.target.value);
    console.log('Search Input:', e.target.value);
  } 

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
   
  ];

  return (
      <div className="pt-24 px-6 min-h-screen bg-gray-50">

      {/* Heading */}
      <h2 className="text-5xl font-bold text-gray-800 text-center mb-2">
        Available Services Near You
      </h2>

      {/* paragraph */}
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
        Explore trusted professionals in your area. Search, filter, and book
        services based on ratings, availability, and location.
      </p>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
        
        {/* Search Box */}
        <div className="relative w-full max-w-xl">
          <IoSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-700 text-xl" />
          <input
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder="Search electricians, plumbers, tutors..."
            className="h-12 w-full pl-12 pr-4 rounded-full border text-gray-700 text-base focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

      
      </div>

      {/* paragraph */}
      <p className="text-sm text-gray-500 text-center mb-12">
        Showing top-rated service providers near your location
      </p>

      {/* card  div*/}
      <div className="flex items-center justify-center shrink flex-wrap gap-10 place-items-center">
        {servicesData.map((elem, idx) => (
            <Card data={elem} key={idx} idx={idx} />
          ))}
      </div>

      {/*  text */}
      <div className="text-center text-gray-600 mt-20">
        <p className="font-medium">
           Verified Professionals | Real Reviews | Quick Booking
        </p>
        <p className="mt-2 text-sm">
          Your local services, simplified.
        </p>
      </div>

      {/* Footer */}
      <Footer />
    </div>



  )
}

export default Service