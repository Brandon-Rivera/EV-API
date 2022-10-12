const express = require('express');
const router = express.Router();
const questionsController = require('../controller/questions.controller');

const middleware = require('../middleware/jwt-middleware.js');

router.get('/questions', middleware, questionsController.getQuestions);
router.get('/questions/:id', middleware, questionsController.getQuestions);
router.post('/questions', middleware, questionsController.insertQuestion);
router.put('/questions', middleware, questionsController.updateQuestion);
router.delete('/questions/:id', middleware, questionsController.deleteQuestion);

module.exports = router;