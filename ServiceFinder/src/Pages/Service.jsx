import { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import Card from '../components/Card';
import Footer from '../components/Footer';

function Service() {

  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    location: "",
    service: "",
    statuss: "",
  });
  const [servicesData, setServicesData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearchChange = (e) => {  
    setSearch(e.target.value);
    console.log('Search Input:', e.target.value);
  };

  // Fetch services from backend API
  const fetchServices = async () => {
    setLoading(true);
    try {
      // Build query string with filters
      const params = new URLSearchParams();
      if (filters.location) params.append('location', filters.location);
      if (filters.service) params.append('service', filters.service);
      if (filters.statuss) params.append('statuss', filters.statuss);
      if (search) params.append('name', search);

      const response = await fetch(`http://localhost:4000/api/users?${params}`);
      const data = await response.json();
      setServicesData(data.users || []);
    } catch (error) {
      console.error('Error fetching services:', error);
      setServicesData([]);
    }
    setLoading(false);
  };

  // Handle filter button click
  const handleFilter = () => {
    fetchServices();
  };

  // Handle search with Enter key
  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter') {
      fetchServices();
    }
  };

  // Load all services on component mount
  useEffect(() => {
    fetchServices();
  }, []);

  // Hardcoded fallback data (optional - remove if not needed)
  const fallbackServicesData = [
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
            onKeyDown={handleSearchSubmit}
            placeholder="Search electricians, plumbers, tutors..."
            className="h-12 w-full pl-12 pr-4 rounded-full border text-gray-700 text-base focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

              {/* Filter Dropdowns */}
        <div className="flex flex-wrap gap-3 justify-center">
          
          {/* Location Filter */}
          <select 
            value={filters.location}
            onChange={(e) => setFilters({...filters, location: e.target.value})}
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="">All Locations</option>
            <option value="Kandivali">Kandivali</option>
            <option value="Borivali">Borivali</option>
            <option value="Thane">Thane</option>
            <option value="Andheri">Andheri</option>
          </select>

          {/* Service Filter */}
          <select 
            value={filters.service}
            onChange={(e) => setFilters({...filters, service: e.target.value})}
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="">All Services</option>
            <option value="Electrician">Electrician</option>
            <option value="Plumber">Plumber</option>
            <option value="Tutor">Tutor</option>
            <option value="AC Repair">AC Repair</option>
          </select>

          {/* Status Filter */}
          <select 
            value={filters.statuss}
            onChange={(e) => setFilters({...filters, statuss: e.target.value})}
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="">All Status</option>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
            <option value="busy">Busy</option>
          </select>

          {/* Apply Filter Button */}
          <button 
            onClick={handleFilter}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Apply Filters
          </button>

          {/* Clear Filter Button */}
          <button 
            onClick={() => {
              setFilters({ location: "", service: "", statuss: "" });
              setSearch("");
              fetchServices();
            }}
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
          >
            Clear All
          </button>
        </div>

      </div>

      {/* paragraph */}
      <p className="text-sm text-gray-500 text-center mb-12 mt-6">
        Showing top-rated service providers near your location
      </p>

      {/* card  div*/}
      <div className="flex items-center justify-center shrink flex-wrap gap-10 place-items-center">
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-600">Loading services...</p>
          </div>
        ) : servicesData.length > 0 ? (
          servicesData.map((elem, idx) => (
            <Card data={elem} key={elem._id || elem.id || idx} idx={idx} />
          ))
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-600 text-xl">No services found</p>
            <p className="text-gray-500 mt-2">Try adjusting your filters or check if backend has data</p>
          </div>
        )}
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