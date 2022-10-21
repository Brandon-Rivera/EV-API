const express = require('express');
const router = express.Router();
const validFolioController = require('../controller/validfolio.controller');

//const middleware = require('../middleware/jwt-middleware.js');

router.get('/validfolio', validFolioController.getvalidFolios);
router.get('/validfolio/:id', validFolioController.getvalidFolio);
router.post('/validdolio', validFolioController.insertvalidFolio);
router.put('/validfolio', validFolioController.updatevalidFolio);
router.delete('/validfolio/:folio', validFolioController.deletevalidFolio);

module.exports = router;