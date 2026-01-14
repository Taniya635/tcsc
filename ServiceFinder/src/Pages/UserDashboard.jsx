import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { HiOutlineUser, HiOutlineMail, HiOutlineBookmark, HiOutlineHeart, HiOutlineClock } from 'react-icons/hi';
import { MdWorkOutline } from 'react-icons/md';
import Footer from '../components/Footer';

function UserDashboard() {
  const { user, isLoggedIn, isWorker } = useAuth();
  const navigate = useNavigate();
  const [myBookings, setMyBookings] = useState([]);
  const [savedServices, setSavedServices] = useState([]);

  useEffect(() => {

    if (!isLoggedIn) {
      navigate('/login');
      return;
    }


    if (isWorker) {
      navigate('/worker-dashboard');
      return;
    }


    fetchUserData();
  }, [isLoggedIn, isWorker, navigate, user]);

  const fetchUserData = async () => {
    if (!user?._id) return;

    try {

      const statsResponse = await fetch(`https://service-finder-backend.vercel.app/api/user/stats?userId=${user._id}`);
      const statsData = await statsResponse.json();
      
      if (statsData.success) {

        const stats = {
          totalBookings: statsData.stats.totalBookings,
          completedBookings: statsData.stats.completedBookings,
          pendingReviews: statsData.stats.pendingReviews
        };
      }


      const bookingsResponse = await fetch(`https://service-finder-backend.vercel.app/api/user/bookings?userId=${user._id}`);
      const bookingsData = await bookingsResponse.json();
      
      if (bookingsData.success) {
        setMyBookings(bookingsData.bookings);
      }


      const savedResponse = await fetch(`https://service-finder-backend.vercel.app/api/user/saved-services?userId=${user._id}`);
      const savedData = await savedResponse.json();
      
      if (savedData.success) {
        setSavedServices(savedData.savedServices);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const getBookingStatusColor = (status) => {
    switch(status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleCancelBooking = async (bookingId) => {
    if (!user?._id) return;

    const confirmed = window.confirm('Are you sure you want to cancel this booking?');
    if (!confirmed) return;

    try {
      const response = await fetch(`https://service-finder-backend.vercel.app/api/user/booking/cancel`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          bookingId, 
          userId: user._id 
        })
      });

      const data = await response.json();
      
      if (data.success) {
        alert('Booking cancelled successfully!');
        fetchUserData(); // Refresh bookings
      } else {
        alert('Failed to cancel booking: ' + data.error);
      }
    } catch (error) {
      console.error('Error cancelling booking:', error);
      alert('Failed to cancel booking');
    }
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">

      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
              <HiOutlineUser className="text-6xl text-purple-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Welcome, {user.name}!
            </h1>
            <p className="text-purple-100 flex items-center justify-center gap-2">
              <HiOutlineMail />
              {user.email}
            </p>
          </div>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Total Bookings</p>
                <p className="text-3xl font-bold text-gray-800">{myBookings.length}</p>
              </div>
              <HiOutlineBookmark className="text-4xl text-blue-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Saved Services</p>
                <p className="text-3xl font-bold text-purple-600">{savedServices.length}</p>
              </div>
              <HiOutlineHeart className="text-4xl text-purple-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Pending Reviews</p>
                <p className="text-3xl font-bold text-orange-600">2</p>
              </div>
              <HiOutlineClock className="text-4xl text-orange-600" />
            </div>
          </div>
        </div>


        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <HiOutlineUser className="text-purple-600" />
            Profile Information
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <HiOutlineUser className="text-2xl text-purple-600 mt-1" />
              <div>
                <p className="text-sm text-gray-500">Full Name</p>
                <p className="text-lg font-semibold text-gray-800">{user.name}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <HiOutlineMail className="text-2xl text-purple-600 mt-1" />
              <div>
                <p className="text-sm text-gray-500">Email Address</p>
                <p className="text-lg font-semibold text-gray-800">{user.email}</p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-semibold">
              Edit Profile
            </button>
          </div>
        </div>


        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <HiOutlineBookmark className="text-purple-600" />
            My Bookings
          </h2>
          
          {myBookings.length > 0 ? (
            <div className="space-y-4">
              {myBookings.map((booking) => (
                <div key={booking._id} className="border rounded-lg p-4 hover:shadow-md transition">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-bold text-gray-800">{booking.workerName}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getBookingStatusColor(booking.status)}`}>
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </span>
                      </div>
                      <p className="text-gray-600 flex items-center gap-2">
                        <MdWorkOutline />
                        {booking.service}
                      </p>
                      <p className="text-gray-500 text-sm mt-1">{booking.location}</p>
                      <p className="text-gray-500 text-sm">
                        {booking.date} at {booking.time}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition">
                        View Details
                      </button>
                      {booking.status === 'completed' && (
                        <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition">
                          Leave Review
                        </button>
                      )}
                      {booking.status === 'pending' && (
                        <button 
                          onClick={() => handleCancelBooking(booking._id)}
                          className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 transition"
                        >
                          Cancel
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <HiOutlineBookmark className="text-6xl text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No bookings yet</p>
              <p className="text-gray-400 text-sm mt-2">Start booking services to see them here</p>
              <button 
                onClick={() => navigate('/service')}
                className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-semibold"
              >
                Browse Services
              </button>
            </div>
          )}
        </div>


        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <HiOutlineHeart className="text-purple-600" />
            Saved Services
          </h2>
          
          {savedServices.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {savedServices.map((service) => (
                <div key={service._id} className="border rounded-lg p-4 hover:shadow-md transition">
                  <h3 className="font-bold text-gray-800 mb-1">{service.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{service.service}</p>
                  <p className="text-sm text-gray-500 mb-2">{service.location}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-yellow-600 font-semibold">
                      {service.statuss && (
                        <span className={`text-xs ${service.statuss === 'online' ? 'text-green-600' : 'text-gray-500'}`}>
                          {service.statuss}
                        </span>
                      )}
                    </span>
                    <button 
                      onClick={() => navigate('/service')}
                      className="px-3 py-1 bg-purple-600 text-white rounded text-sm hover:bg-purple-700 transition"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <HiOutlineHeart className="text-6xl text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No saved services</p>
              <p className="text-gray-400 text-sm mt-2">Save your favorite services for quick access</p>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <button 
              onClick={() => navigate('/service')}
              className="p-4 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition font-semibold"
            >
              Browse Services
            </button>
            <button className="p-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition font-semibold">
              View All Bookings
            </button>
            <button className="p-4 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition font-semibold">
              My Reviews
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default UserDashboard;
