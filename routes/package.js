const express = require('express');
const router = express.Router();
const packageController = require('../controller/package.controller');

const middleware = require('../middleware/jwt-middleware.js');

router.get('/package', middleware, packageController.getPackages);
router.get('/package/:idUser', middleware, packageController.getPackage);
router.post('/package', middleware, packageController.insertPackage);
router.put('/package', middleware, packageController.updatePackage);
router.put('/packageName', middleware, packageController.updatePackageName);
router.delete('/package/:id', middleware, packageController.deletePackage);
router.delete('/packagedos', middleware, packageController.deletePackageDOS);
router.post('/packageNEW', middleware, packageController.insertPackageNEW);

module.exports = router;