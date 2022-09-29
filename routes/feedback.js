const express = require('express');
const router = express.Router();
const feedbackController = require('../controller/feedback.controller');

//const middleware = '../middleware/jwt-middleware.js';

router.get('/feedback', feedbackController.getFeedbacks);
router.get('/feedback/:id', feedbackController.getFeedback);
router.get('/feedbackByFeedLevel/:feedLevel', feedbackController.getFeedbackByFeedLevel);
router.post('/feedback', feedbackController.insertFeedback);
router.put('/feedback', feedbackController.updateFeedback);
router.delete('/feedback/:id', feedbackController.deleteFeedback);

module.exports = router;