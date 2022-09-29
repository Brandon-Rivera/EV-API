const express = require('express');
const router = express.Router();
const packageController = require('../controller/package.controller');

//const middleware = '../middleware/jwt-middleware.js';

router.get('/package', packageController.getPackages);
router.get('/package/:idUser', packageController.getPackage);
router.get('/packageByDate', packageController.getPackageByDate);
router.post('/package', packageController.insertPackage);
router.put('/package', packageController.updatePackage);
router.delete('/package/:id', packageController.deletePackage);

module.exports = router;