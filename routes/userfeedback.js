const express = require('express');
const router = express.Router();
const userfeedbackController = require('../controller/userfeedback.controller');

const middleware = require('../middleware/jwt-middleware.js');

router.get('/userfeedback', middleware, userfeedbackController.getUserFeedbacks);
router.get('/userfeedback/:idUser', middleware, userfeedbackController.getUserFeedback);
router.get('/userfeedbackByTime', middleware, userfeedbackController.getUserFeedbackByTime);
router.post('/userfeedback', middleware, userfeedbackController.insertUserFeedback);
router.put('/userfeedback', middleware, userfeedbackController.updateUserFeedback);
router.delete('/userfeedback/:id', middleware, userfeedbackController.deleteUserFeedback);

module.exports = router;