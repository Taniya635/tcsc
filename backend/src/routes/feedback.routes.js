const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedback.controller');

// Route to add feedback
router.post('/feedback', feedbackController.addFeedback);

// Route to get feedback by worker ID
router.get('/feedback/worker/:workerId', feedbackController.getFeedbackByWorker);

// Route to get average rating for a worker
router.get('/feedback/worker/:workerId/average-rating', feedbackController.getAverageRating);

// Route to delete feedback by feedback ID
router.delete('/feedback/:feedbackId', feedbackController.deleteFeedback);

module.exports = router;