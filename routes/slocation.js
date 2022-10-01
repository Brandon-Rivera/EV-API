const express = require('express');
const router = express.Router();
const SLocationController = require('../controller/slocation.controller');

//const middleware = '../middleware/jwt-middleware.js';

router.get('/slocation', SLocationController.getSLocations);
router.get('/slocation/:id', SLocationController.getSLocation);
router.get('/slocationByUser/:idUser', SLocationController.getSLocationByUser);
router.post('/slocation', SLocationController.insertSLocation);
router.put('/slocation', SLocationController.updateSLocation);
router.delete('/slocation/:id', SLocationController.deleteSLocation);

module.exports = router;