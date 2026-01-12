import { FaStar, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

function WorkerDetails() {


  const worker = {
    name: "Vishal Electrical Services",
    category: "Electrician",
    rating: 4.5,
    reviews: 120,
    location: "Kandivali, Mumbai",
    status: "online",
    description:
      "Professional home wiring and electrical repair services with 5+ years of experience.",
    services: [
      "Home Wiring",
      "Electrical Repairs",
      "Fan & Light Installation",
      "Short Circuit Fixing",
      "Emergency Services",
    ],
    availability: "Mon – Sat | 10:00 AM – 8:00 PM",
    price: "Starting from ₹499",
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-6">
      <div className="max-w-6xl mx-auto">

        
        <div className="bg-white rounded-2xl shadow p-8 grid md:grid-cols-3 gap-8">



          {/* image  */}
          <div className="flex justify-center">
            <img
              src="https://i.pravatar.cc/300"
              alt="worker"
              className="w-40 h-40 rounded-full object-cover"
            />
          </div>

          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700">
                {worker.category}
              </span>
              <span
                className={`text-sm font-medium ${
                  worker.status === "online"
                    ? "text-green-600"
                    : "text-yellow-600"
                }`}
              >
                ● {worker.status}
              </span>
            </div>

            <h1 className="text-3xl font-bold mb-2">{worker.name}</h1>

            <div className="flex items-center gap-2 text-gray-600 mb-2">
              <FaStar className="text-yellow-400" />
              <span>{worker.rating}</span>
              <span>({worker.reviews} reviews)</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600 mb-4">
              <FaMapMarkerAlt />
              <span>{worker.location}</span>
            </div>

            <p className="text-gray-700">{worker.description}</p>

            
            <div className="flex gap-4 mt-6">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                Book Now
              </button>
              <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition flex items-center gap-2">
                <FaPhoneAlt /> Contact
              </button>
            </div>
          </div>
        </div>

        
        <div className="grid md:grid-cols-2 gap-8 mt-12">

          
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">
              Services Offered
            </h2>
            <ul className="space-y-2 text-gray-700">
              {worker.services.map((service, i) => (
                <li key={i}>✔ {service}</li>
              ))}
            </ul>
          </div>

          
          <div className="bg-white rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">
              Availability & Pricing
            </h2>
            <p className="text-gray-700 mb-2">
              <strong>Availability:</strong> {worker.availability}
            </p>
            <p className="text-gray-700">
              <strong>Charges:</strong> {worker.price}
            </p>
          </div>
        </div>

        
        <div className="bg-white rounded-2xl shadow p-6 mt-12">
          <h2 className="text-xl font-semibold mb-4">
            Customer Reviews
          </h2>

          <div className="border-b pb-4 mb-4">
            <p className="text-gray-700">
              “Very professional and on time. Fixed my wiring quickly.”
            </p>
            <p className="text-sm text-gray-500 mt-2">
              — Amit S. ⭐⭐⭐⭐⭐
            </p>
          </div>

          <div>
            <p className="text-gray-700">
              “Good service and reasonable pricing.”
            </p>
            <p className="text-sm text-gray-500 mt-2">
              — Neha R. ⭐⭐⭐⭐
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default WorkerDetails;
