const express = require('express');
const router = express.Router();
const questionanswerController = require('../controller/questionanswer.controller');

//const middleware = '../middleware/jwt-middleware.js';

router.get('/questionanswer', questionanswerController.getQuestionsAnswers);
router.get('/questionanswer/:id', questionanswerController.getQuestionAnswer);
router.post('/questionanswer', questionanswerController.insertQuestionAnswer);
router.put('/questionanswer', questionanswerController.updateQuestionAnswer );
router.delete('/questionanswer/:id', questionanswerController.deleteQuestionAnswer);

module.exports = router;