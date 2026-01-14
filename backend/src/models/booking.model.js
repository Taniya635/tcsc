const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  // Customer Information
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  customerName: {
    type: String,
    required: true
  },
  customerEmail: {
    type: String,
    required: true
  },
  
  // Worker Information
  workerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  workerName: {
    type: String,
    required: true
  },
  
  // Service Details
  service: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  
  // Booking Schedule
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  
  // Additional Information
  description: {
    type: String,
    default: ''
  },
  
  // Status
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'cancelled'],
    default: 'pending'
  },
  
  // Timestamps
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt timestamp before saving
bookingSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Booking', bookingSchema);
