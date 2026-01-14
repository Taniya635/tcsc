const express = require('express');
const router = express.Router();
const workerController = require('../controllers/worker.controller');

// Worker Dashboard Routes
router.get('/stats', workerController.getWorkerStats);
router.get('/bookings', workerController.getWorkerBookings);
router.put('/status', workerController.updateWorkerStatus);
router.post('/booking/accept', workerController.acceptBooking);
router.post('/booking/reject', workerController.rejectBooking);
router.post('/booking/complete', workerController.completeBooking);

module.exports = router;
