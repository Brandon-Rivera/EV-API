const express = require('express');
const router = express.Router();
const feedbackController = require('../controller/feedback.controller');

const middleware = require('../middleware/jwt-middleware.js');

router.get('/feedback', middleware, feedbackController.getFeedbacks);
router.get('/feedback/:id', middleware, feedbackController.getFeedback);
router.get('/feedbackByFeedLevel/:feedLevel', middleware, feedbackController.getFeedbackByFeedLevel);
router.post('/feedback', middleware, feedbackController.insertFeedback);
router.put('/feedback', middleware, feedbackController.updateFeedback);
router.delete('/feedback/:id', middleware, feedbackController.deleteFeedback);

module.exports = router;