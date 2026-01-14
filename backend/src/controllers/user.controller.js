const UserModel = require('../models/user.model');
const BookingModel = require('../models/booking.model');

// Get user dashboard statistics
const getUserStats = async (req, res) => {
  try {
    const userId = req.query.userId;
    
    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    // Get total bookings
    const totalBookings = await BookingModel.countDocuments({ userId });
    
    // Get completed bookings
    const completedBookings = await BookingModel.countDocuments({ 
      userId, 
      status: 'completed' 
    });

    // Get pending reviews (completed bookings without reviews)
    const pendingReviews = completedBookings; // Simplified for now

    res.status(200).json({
      success: true,
      stats: {
        totalBookings,
        completedBookings,
        pendingReviews
      }
    });

  } catch (error) {
    console.error('Error fetching user stats:', error);
    res.status(500).json({ error: 'Failed to fetch user statistics' });
  }
};

// Get user's bookings
const getUserBookings = async (req, res) => {
  try {
    const userId = req.query.userId;
    const status = req.query.status; // optional filter by status
    
    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    const filter = { userId };
    if (status) {
      filter.status = status;
    }

    const bookings = await BookingModel.find(filter)
      .sort({ createdAt: -1 })
      .limit(50);

    res.status(200).json({
      success: true,
      bookings,
      count: bookings.length
    });

  } catch (error) {
    console.error('Error fetching user bookings:', error);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
};

// Create new booking
const createBooking = async (req, res) => {
  try {
    const { 
      userId, 
      customerName, 
      customerEmail,
      workerId, 
      workerName, 
      service, 
      location, 
      date, 
      time,
      description 
    } = req.body;

    // Validation
    if (!userId || !workerId || !service || !date || !time) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const newBooking = new BookingModel({
      userId,
      customerName,
      customerEmail,
      workerId,
      workerName,
      service,
      location,
      date,
      time,
      description: description || '',
      status: 'pending'
    });

    await newBooking.save();

    res.status(201).json({
      success: true,
      message: 'Booking created successfully',
      booking: newBooking
    });

  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: 'Failed to create booking' });
  }
};

// Cancel booking
const cancelBooking = async (req, res) => {
  try {
    const { bookingId, userId } = req.body;
    
    if (!bookingId || !userId) {
      return res.status(400).json({ error: 'Booking ID and User ID are required' });
    }

    // Find booking and verify it belongs to the user
    const booking = await BookingModel.findOne({ _id: bookingId, userId });

    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    // Only allow cancellation if status is pending or confirmed
    if (booking.status === 'completed' || booking.status === 'cancelled') {
      return res.status(400).json({ error: 'Cannot cancel this booking' });
    }

    booking.status = 'cancelled';
    await booking.save();

    res.status(200).json({
      success: true,
      message: 'Booking cancelled successfully',
      booking
    });

  } catch (error) {
    console.error('Error cancelling booking:', error);
    res.status(500).json({ error: 'Failed to cancel booking' });
  }
};

// Get saved services (workers user has saved)
const getSavedServices = async (req, res) => {
  try {
    const userId = req.query.userId;
    
    if (!userId) {
      return res.status(400).json({ error: 'User ID is required' });
    }

    // Get user and their saved services
    const user = await UserModel.findById(userId);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // If savedServices field exists in user model
    // Otherwise, return workers they've booked before
    const bookings = await BookingModel.find({ userId }).distinct('workerId');
    const savedWorkers = await UserModel.find({ 
      _id: { $in: bookings },
      service: { $exists: true } 
    }).select('name service location email contact statuss');

    res.status(200).json({
      success: true,
      savedServices: savedWorkers,
      count: savedWorkers.length
    });

  } catch (error) {
    console.error('Error fetching saved services:', error);
    res.status(500).json({ error: 'Failed to fetch saved services' });
  }
};

module.exports = {
  getUserStats,
  getUserBookings,
  createBooking,
  cancelBooking,
  getSavedServices
};
