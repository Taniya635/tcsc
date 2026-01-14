import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { HiOutlineUser, HiOutlineBriefcase, HiOutlineLocationMarker, HiOutlineStar, HiOutlineCheckCircle } from 'react-icons/hi';
import { MdWorkOutline, MdOutlineLocationOn, MdPhoneEnabled } from 'react-icons/md';
import Footer from '../components/Footer';

function WorkerDashboard() {
  const { user, isLoggedIn, isWorker, logout } = useAuth();
  const navigate = useNavigate();
  const [status, setStatus] = useState('offline');
  const [bookings, setBookings] = useState([]);
  const [stats, setStats] = useState({
    totalBookings: 0,
    completedJobs: 0,
    rating: 0,
    reviews: 0
  });

  useEffect(() => {

    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    
    if (!isWorker) {
      navigate('/');
      return;
    }


    if (user?.statuss) {
      setStatus(user.statuss);
    }


    fetchWorkerData();
  }, [isLoggedIn, isWorker, navigate, user]);

  const fetchWorkerData = async () => {
    if (!user?._id) return;

    try {

      const statsResponse = await fetch(`https://service-finder-backend.vercel.app/api/worker/stats?workerId=${user._id}`);
      const statsData = await statsResponse.json();
      
      if (statsData.success) {
        setStats(statsData.stats);
      }


      const bookingsResponse = await fetch(`https://service-finder-backend.vercel.app/api/worker/bookings?workerId=${user._id}`);
      const bookingsData = await bookingsResponse.json();
      
      if (bookingsData.success) {
        setBookings(bookingsData.bookings);
      }
    } catch (error) {
      console.error('Error fetching worker data:', error);
    }
  };

  const handleStatusChange = async (newStatus) => {
    if (!user?._id) return;

    try {
      const response = await fetch(`https://service-finder-backend.vercel.app/api/worker/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          workerId: user._id, 
          status: newStatus 
        })
      });

      const data = await response.json();
      
      if (data.success) {
        setStatus(newStatus);
        alert(`Status updated to ${newStatus}`);
      } else {
        alert('Failed to update status: ' + data.error);
      }
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Failed to update status');
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'online': return 'bg-green-500 text-white';
      case 'busy': return 'bg-yellow-500 text-white';
      case 'offline': return 'bg-gray-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getStatusBadgeColor = (status) => {
    switch(status) {
      case 'online': return 'bg-green-100 text-green-700';
      case 'busy': return 'bg-yellow-100 text-yellow-700';
      case 'offline': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
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

  const handleAcceptBooking = async (bookingId) => {
    try {
      const response = await fetch(`https://service-finder-backend.vercel.app/api/worker/booking/accept`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bookingId })
      });

      const data = await response.json();
      
      if (data.success) {
        alert('Booking accepted!');
        fetchWorkerData(); // Refresh bookings
      } else {
        alert('Failed to accept booking: ' + data.error);
      }
    } catch (error) {
      console.error('Error accepting booking:', error);
      alert('Failed to accept booking');
    }
  };

  const handleRejectBooking = async (bookingId) => {
    try {
      const response = await fetch(`https://service-finder-backend.vercel.app/api/worker/booking/reject`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bookingId })
      });

      const data = await response.json();
      
      if (data.success) {
        alert('Booking declined!');
        fetchWorkerData(); // Refresh bookings
      } else {
        alert('Failed to decline booking: ' + data.error);
      }
    } catch (error) {
      console.error('Error declining booking:', error);
      alert('Failed to decline booking');
    }
  };

  const handleCompleteBooking = async (bookingId) => {
    try {
      const response = await fetch(`https://service-finder-backend.vercel.app/api/worker/booking/complete`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bookingId })
      });

      const data = await response.json();
      
      if (data.success) {
        alert('Booking marked as completed!');
        fetchWorkerData(); // Refresh bookings
      } else {
        alert('Failed to complete booking: ' + data.error);
      }
    } catch (error) {
      console.error('Error completing booking:', error);
      alert('Failed to complete booking');
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
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Welcome back, {user.name}!
              </h1>
              <p className="text-blue-100 flex items-center gap-2">
                <MdWorkOutline className="text-xl" />
                {user.service} Professional
              </p>
            </div>
            

            <div className="flex flex-col gap-2">
              <span className="text-sm text-blue-100">Your Status:</span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleStatusChange('online')}
                  className={`px-4 py-2 rounded-lg font-semibold transition ${
                    status === 'online' ? getStatusColor('online') : 'bg-white/20 hover:bg-white/30'
                  }`}
                >
                  Online
                </button>
                <button
                  onClick={() => handleStatusChange('busy')}
                  className={`px-4 py-2 rounded-lg font-semibold transition ${
                    status === 'busy' ? getStatusColor('busy') : 'bg-white/20 hover:bg-white/30'
                  }`}
                >
                  Busy
                </button>
                <button
                  onClick={() => handleStatusChange('offline')}
                  className={`px-4 py-2 rounded-lg font-semibold transition ${
                    status === 'offline' ? getStatusColor('offline') : 'bg-white/20 hover:bg-white/30'
                  }`}
                >
                  Offline
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        

        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <HiOutlineUser className="text-blue-600" />
            Profile Information
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <HiOutlineUser className="text-2xl text-blue-600 mt-1" />
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="text-lg font-semibold text-gray-800">{user.name}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <MdPhoneEnabled className="text-2xl text-blue-600 mt-1" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-lg font-semibold text-gray-800">{user.email}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MdWorkOutline className="text-2xl text-blue-600 mt-1" />
              <div>
                <p className="text-sm text-gray-500">Service</p>
                <p className="text-lg font-semibold text-gray-800">{user.service}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MdOutlineLocationOn className="text-2xl text-blue-600 mt-1" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-lg font-semibold text-gray-800">{user.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <HiOutlineCheckCircle className="text-2xl text-blue-600 mt-1" />
              <div>
                <p className="text-sm text-gray-500">Status</p>
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getStatusBadgeColor(status)}`}>
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MdPhoneEnabled className="text-2xl text-blue-600 mt-1" />
              <div>
                <p className="text-sm text-gray-500">Contact</p>
                <p className="text-lg font-semibold text-gray-800">{user.contact || 'Not provided'}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Total Bookings</p>
                <p className="text-3xl font-bold text-gray-800">{stats.totalBookings}</p>
              </div>
              <HiOutlineBriefcase className="text-4xl text-blue-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Completed Jobs</p>
                <p className="text-3xl font-bold text-green-600">{stats.completedJobs}</p>
              </div>
              <HiOutlineCheckCircle className="text-4xl text-green-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Average Rating</p>
                <p className="text-3xl font-bold text-yellow-600">{stats.rating}</p>
              </div>
              <HiOutlineStar className="text-4xl text-yellow-600" />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Total Reviews</p>
                <p className="text-3xl font-bold text-purple-600">{stats.reviews}</p>
              </div>
              <HiOutlineStar className="text-4xl text-purple-600" />
            </div>
          </div>
        </div>

        {/* Recent Bookings */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <HiOutlineBriefcase className="text-blue-600" />
            Recent Bookings
          </h2>
          
          {bookings.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 text-gray-600 font-semibold">Customer</th>
                    <th className="text-left py-3 px-4 text-gray-600 font-semibold">Service</th>
                    <th className="text-left py-3 px-4 text-gray-600 font-semibold">Location</th>
                    <th className="text-left py-3 px-4 text-gray-600 font-semibold">Date & Time</th>
                    <th className="text-left py-3 px-4 text-gray-600 font-semibold">Status</th>
                    <th className="text-left py-3 px-4 text-gray-600 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((booking) => (
                    <tr key={booking._id} className="border-b hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <p className="font-semibold text-gray-800">{booking.customerName}</p>
                      </td>
                      <td className="py-4 px-4 text-gray-600">{booking.service}</td>
                      <td className="py-4 px-4 text-gray-600">{booking.location}</td>
                      <td className="py-4 px-4 text-gray-600">
                        <p>{booking.date}</p>
                        <p className="text-sm text-gray-500">{booking.time}</p>
                      </td>
                      <td className="py-4 px-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getBookingStatusColor(booking.status)}`}>
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex gap-2">
                          {booking.status === 'pending' && (
                            <>
                              <button 
                                onClick={() => handleAcceptBooking(booking._id)}
                                className="px-3 py-1 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition"
                              >
                                Accept
                              </button>
                              <button 
                                onClick={() => handleRejectBooking(booking._id)}
                                className="px-3 py-1 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 transition"
                              >
                                Decline
                              </button>
                            </>
                          )}
                          {booking.status === 'confirmed' && (
                            <button 
                              onClick={() => handleCompleteBooking(booking._id)}
                              className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition"
                            >
                              Mark Complete
                            </button>
                          )}
                          {(booking.status === 'completed' || booking.status === 'cancelled') && (
                            <span className="text-sm text-gray-500">No actions</span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-12">
              <HiOutlineBriefcase className="text-6xl text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">No bookings yet</p>
              <p className="text-gray-400 text-sm mt-2">Your bookings will appear here</p>
            </div>
          )}
        </div>


        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <button className="p-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition font-semibold">
              Update Profile
            </button>
            <button className="p-4 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition font-semibold">
              View All Bookings
            </button>
            <button className="p-4 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition font-semibold">
              View Reviews
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default WorkerDashboard;
