const express = require('express');
const router = express.Router();
const feedbackController = require('../controllers/feedback.controller');


router.post('/feedback', feedbackController.addFeedback);


router.get('/feedback/worker/:workerId', feedbackController.getFeedbackByWorker);


router.get('/feedback/worker/:workerId/average-rating', feedbackController.getAverageRating);


router.delete('/feedback/:feedbackId', feedbackController.deleteFeedback);

module.exports = router;