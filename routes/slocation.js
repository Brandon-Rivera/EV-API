const express = require('express');
const router = express.Router();
const SLocationController = require('../controller/slocation.controller');

const middleware = require('../middleware/jwt-middleware.js');

router.get('/slocation', middleware, SLocationController.getSLocations);
router.get('/slocation/:id', middleware, SLocationController.getSLocation);
router.get('/slocationByUser/:idUser', middleware, SLocationController.getSLocationByUser);
router.post('/slocation', middleware, SLocationController.insertSLocation);
router.put('/slocation', middleware, SLocationController.updateSLocation);
router.delete('/slocation/:id', middleware, SLocationController.deleteSLocation);

module.exports = router;