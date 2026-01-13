const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    workerId: { type: mongoose.Schema.Types.ObjectId, ref: 'workers', required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String },
    serviceCategory: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const FeedbackModel = mongoose.model('feedbacks', FeedbackSchema);

module.exports = FeedbackModel;