const express = require('express');
const router = express.Router();
const userfeedbackController = require('../controller/userfeedback.controller');

//const middleware = '../middleware/jwt-middleware.js';

router.get('/userfeedback', userfeedbackController.getUserFeedbacks);
router.get('/userfeedback/:id', userfeedbackController.getUserFeedback);
router.post('/userfeedback', userfeedbackController.insertUserFeedback);
router.put('/userfeedback', userfeedbackController.updateUserFeedback);
router.delete('/userfeedback/:id', userfeedbackController.deleteUserFeedback);

module.exports = router;