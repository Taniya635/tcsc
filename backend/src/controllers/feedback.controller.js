const Feedback = require('../models/feedback.model');

exports.addFeedback = async (req, res) => {
    try {
        const { userId, workerId, rating, comment, serviceCategory } = req.body;
        
        const newFeedback = new Feedback({
            userId,
            workerId,
            rating,
            comment,
            serviceCategory
        });
        
        const savedFeedback = await newFeedback.save();
        res.status(201).json({ message: 'Feedback added successfully', feedback: savedFeedback });
    } catch (error) {
        res.status(500).json({ message: 'Error adding feedback', error: error.message });
    }
};

exports.getFeedbackByWorker = async (req, res) => {
    try {
        const { workerId } = req.params;
        const feedbacks = await Feedback.find({ workerId });
        res.status(200).json({ feedbacks });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving feedback', error: error.message });
    }
};

exports.getAverageRating = async (req, res) => {
    try {
        const { workerId } = req.params;
        const feedbacks = await Feedback.find({ workerId });
        
        if (feedbacks.length === 0) {
            return res.status(200).json({ averageRating: 0 });
        }
        
        const totalRating = feedbacks.reduce((sum, feedback) => sum + feedback.rating, 0);
        const averageRating = totalRating / feedbacks.length;
        
        res.status(200).json({ averageRating });
    }
    catch (error) {
        res.status(500).json({ message: 'Error calculating average rating', error: error.message });
    }
};  

exports.deleteFeedback = async (req, res) => {
    try {
        const { feedbackId } = req.params;
        await Feedback.findByIdAndDelete(feedbackId);
        res.status(200).json({ message: 'Feedback deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting feedback', error: error.message });
    }
};


