const express = require('express');
const router = express.Router();
const questionsController = require('../controller/questions.controller');

//const middleware = '../middleware/jwt-middleware.js';

router.get('/questions', questionsController.getQuestions);
router.get('/questions/:id', questionsController.getQuestions);
router.post('/questions', questionsController.insertQuestion);
router.put('/questions', questionsController.updateQuestion);
router.delete('/questions/:id', questionsController.deleteQuestion);

module.exports = router;