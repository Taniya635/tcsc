const UserModel = require('../models/user.model');
const BookingModel = require('../models/booking.model');
const FeedbackModel = require('../models/feedback.model');

// Get worker dashboard statistics
const getWorkerStats = async (req, res) => {
  try {
    const workerId = req.query.workerId;
    
    if (!workerId) {
      return res.status(400).json({ error: 'Worker ID is required' });
    }

    // Get total bookings
    const totalBookings = await BookingModel.countDocuments({ workerId });
    
    // Get completed jobs
    const completedJobs = await BookingModel.countDocuments({ 
      workerId, 
      status: 'completed' 
    });

    // Get average rating
    const ratings = await FeedbackModel.find({ workerId });
    const avgRating = ratings.length > 0 
      ? (ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length).toFixed(1)
      : 0;

    // Get total reviews
    const reviews = ratings.length;

    res.status(200).json({
      success: true,
      stats: {
        totalBookings,
        completedJobs,
        rating: parseFloat(avgRating),
        reviews
      }
    });

  } catch (error) {
    console.error('Error fetching worker stats:', error);
    res.status(500).json({ error: 'Failed to fetch worker statistics' });
  }
};

// Get worker's bookings
const getWorkerBookings = async (req, res) => {
  try {
    const workerId = req.query.workerId;
    const status = req.query.status; // optional filter by status
    
    if (!workerId) {
      return res.status(400).json({ error: 'Worker ID is required' });
    }

    const filter = { workerId };
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
    console.error('Error fetching worker bookings:', error);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
};

// Update worker status
const updateWorkerStatus = async (req, res) => {
  try {
    const { workerId, status } = req.body;
    
    if (!workerId || !status) {
      return res.status(400).json({ error: 'Worker ID and status are required' });
    }

    if (!['online', 'busy', 'offline'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status value' });
    }

    const worker = await UserModel.findByIdAndUpdate(
      workerId,
      { statuss: status },
      { new: true }
    );

    if (!worker) {
      return res.status(404).json({ error: 'Worker not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Status updated successfully',
      status: worker.statuss
    });

  } catch (error) {
    console.error('Error updating worker status:', error);
    res.status(500).json({ error: 'Failed to update status' });
  }
};

// Accept booking
const acceptBooking = async (req, res) => {
  try {
    const { bookingId } = req.body;
    
    if (!bookingId) {
      return res.status(400).json({ error: 'Booking ID is required' });
    }

    const booking = await BookingModel.findByIdAndUpdate(
      bookingId,
      { status: 'confirmed' },
      { new: true }
    );

    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Booking accepted successfully',
      booking
    });

  } catch (error) {
    console.error('Error accepting booking:', error);
    res.status(500).json({ error: 'Failed to accept booking' });
  }
};

// Reject/Cancel booking
const rejectBooking = async (req, res) => {
  try {
    const { bookingId } = req.body;
    
    if (!bookingId) {
      return res.status(400).json({ error: 'Booking ID is required' });
    }

    const booking = await BookingModel.findByIdAndUpdate(
      bookingId,
      { status: 'cancelled' },
      { new: true }
    );

    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

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

// Complete booking
const completeBooking = async (req, res) => {
  try {
    const { bookingId } = req.body;
    
    if (!bookingId) {
      return res.status(400).json({ error: 'Booking ID is required' });
    }

    const booking = await BookingModel.findByIdAndUpdate(
      bookingId,
      { status: 'completed' },
      { new: true }
    );

    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    res.status(200).json({
      success: true,
      message: 'Booking marked as completed',
      booking
    });

  } catch (error) {
    console.error('Error completing booking:', error);
    res.status(500).json({ error: 'Failed to complete booking' });
  }
};

module.exports = {
  getWorkerStats,
  getWorkerBookings,
  updateWorkerStatus,
  acceptBooking,
  rejectBooking,
  completeBooking
};
