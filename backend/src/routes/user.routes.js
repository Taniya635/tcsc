const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// User Dashboard Routes
router.get('/stats', userController.getUserStats);
router.get('/bookings', userController.getUserBookings);
router.post('/booking', userController.createBooking);
router.post('/booking/cancel', userController.cancelBooking);
router.get('/saved-services', userController.getSavedServices);

module.exports = router;
