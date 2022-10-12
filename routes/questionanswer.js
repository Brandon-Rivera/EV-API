const express = require('express');
const router = express.Router();
const questionanswerController = require('../controller/questionanswer.controller');

const middleware = require('../middleware/jwt-middleware.js');

router.get('/questionanswer', middleware, questionanswerController.getQuestionsAnswers);
router.get('/questionanswer/:idUser', middleware, questionanswerController.getQuestionAnswer);
router.get('/questionanswerByTime/:idUser', questionanswerController.getQuestionAnswerByTime);
router.post('/questionanswer', middleware, questionanswerController.insertQuestionAnswer);
router.put('/questionanswer', middleware, questionanswerController.updateQuestionAnswer );
router.delete('/questionanswer/:id', middleware, questionanswerController.deleteQuestionAnswer);

module.exports = router;