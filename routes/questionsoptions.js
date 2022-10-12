const express = require('express');
const router = express.Router();
const questionsoptionsController = require('../controller/questionsoptions.controller');

const middleware = require('../middleware/jwt-middleware.js');

router.get('/questionsoptions', middleware, questionsoptionsController.getQuestionsOptionss);
router.get('/questionsoptions/:id', middleware, questionsoptionsController.getQuestionsOptions);
router.get('/questionsoptionsByQuesId/:idQuestions', middleware, questionsoptionsController.getQuestionsOptionsByQuesId);
router.post('/questionsoptions', middleware, questionsoptionsController.insertQuestionsOptions);
router.put('/questionsoptions', middleware, questionsoptionsController.updateQuestionsOptions);
router.delete('/questionsoptions/:id', middleware, questionsoptionsController.deleteQuestionsOptions);

module.exports = router;