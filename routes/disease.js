const express = require('express');
const router = express.Router();
const diseaseController = require('../controller/disease.controller');

const middleware = require('../middleware/jwt-middleware.js');

router.get('/disease', middleware, diseaseController.getDiseases);
router.get('/disease/:id', middleware, diseaseController.getDiseases);
router.post('/disease', middleware, diseaseController.insertDisease);
router.put('/disease', middleware, diseaseController.updateDisease);
router.delete('/disease/:id', middleware, diseaseController.deleteDisease);

module.exports = router;