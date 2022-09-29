const express = require('express');
const router = express.Router();
const questionsoptionsController = require('../controller/questionsoptions.controller');

//const middleware = '../middleware/jwt-middleware.js';

router.get('/questionsoptions', questionsoptionsController.getQuestionsOptionss);
router.get('/questionsoptions/:id', questionsoptionsController.getQuestionsOptions);
router.get('/questionsoptionsByQuesId/:idQuestions', questionsoptionsController.getQuestionsOptionsByQuesId);
router.post('/questionsoptions', questionsoptionsController.insertQuestionsOptions);
router.put('/questionsoptions', questionsoptionsController.updateQuestionsOptions);
router.delete('/questionsoptions/:id', questionsoptionsController.deleteQuestionsOptions);

module.exports = router;