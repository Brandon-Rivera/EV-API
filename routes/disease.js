const express = require('express');
const router = express.Router();
const diseaseController = require('../controller/disease.controller');

//const middleware = '../middleware/jwt-middleware.js';

router.get('/disease', diseaseController.getDiseases);
router.get('/disease/:id', diseaseController.getDiseases);
router.post('/disease', diseaseController.insertDisease);
router.put('/disease', diseaseController.updateDisease);
router.delete('/disease/:id', diseaseController.deleteDisease);

module.exports = router;