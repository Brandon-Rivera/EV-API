const express = require('express');
const router = express.Router();
const SLocationController = require('../controller/SLocation.controller');

//const middleware = '../middleware/jwt-middleware.js';

router.get('/sLocation', SLocationController.getSLocations);
router.get('/sLocation/:id', SLocationController.getSLocation);
router.get('/sLocationByUser/:idUser', SLocationController.getSLocationByUser);
router.post('/sLocation', SLocationController.insertSLocation);
router.put('/sLocation', SLocationController.updateSLocation);
router.delete('/sLocation/:id', SLocationController.deleteSLocation);

module.exports = router;