const express = require('express');
const router = express.Router();
const memberdiseaseController = require('../controller/memberdisease.controller');

const middleware = require('../middleware/jwt-middleware.js');

router.get('/memberdisease', middleware, memberdiseaseController.getMemberdiseases);
router.get('/memberdisease/:idMember', middleware, memberdiseaseController.getMemberdisease);
router.post('/memberdisease', middleware, memberdiseaseController.insertMemberdisease);
router.put('/memberdisease', middleware, memberdiseaseController.updateMemberdisease);
router.delete('/memberdisease/:idMember', middleware, memberdiseaseController.deleteMemberdisease);

module.exports = router;