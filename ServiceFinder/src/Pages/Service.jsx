import { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import Card from '../components/Card';
import Footer from '../components/Footer';
import API_URL from '../config/api';

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


  const fetchServices = async () => {
    setLoading(true);
    try {

      const params = new URLSearchParams();
      if (filters.location) params.append('location', filters.location);
      if (filters.service) params.append('service', filters.service);
      if (filters.statuss) params.append('statuss', filters.statuss);
      if (search) params.append('name', search);

      const response = await fetch(`${API_URL}/api/users?${params}`);
      const data = await response.json();
      setServicesData(data.users || []);
    } catch (error) {
      console.error('Error fetching services:', error);
      setServicesData([]);
    }
    setLoading(false);
  };


  const handleFilter = () => {
    fetchServices();
  };

  // Handle search with Enter key
  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter') {
      fetchServices();
    }
  };


  useEffect(() => {
    fetchServices();
  }, []);


  return (
      <div className="pt-24 px-6 min-h-screen bg-gray-50">


      <h2 className="text-5xl font-bold text-gray-800 text-center mb-2">
        Available Services Near You
      </h2>

      {/* paragraph */}
      <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
        Explore trusted professionals in your area. Search, filter, and book
        services based on ratings, availability, and location.
      </p>


      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
        

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


        <div className="flex flex-wrap gap-3 justify-center">
          

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


          <button 
            onClick={handleFilter}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Apply Filters
          </button>


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


      <p className="text-sm text-gray-500 text-center mb-12 mt-6">
        Showing top-rated service providers near your location
      </p>


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


      <Footer />
    </div>



  )
}

export default Service