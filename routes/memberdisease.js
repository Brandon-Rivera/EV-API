const express = require('express');
const router = express.Router();
const memberdiseaseController = require('../controller/memberdisease.controller');

//const middleware = '../middleware/jwt-middleware.js';

router.get('/memberdisease', memberdiseaseController.getMemberdiseases);
router.get('/memberdisease/:idMember', memberdiseaseController.getMemberdisease);
router.post('/memberdisease', memberdiseaseController.insertMemberdisease);
router.put('/memberdisease', memberdiseaseController.updateMemberdisease);
router.delete('/memberdisease/:idMember', memberdiseaseController.deleteMemberdisease);

module.exports = router;