const express = require('express');
const router = express.Router();
const administratorController = require('../controller/administrator.controller');

const middleware = require('../middleware/jwt-middleware.js');

router.get('/administrator', middleware, administratorController.getAdministrators);
router.get('/administrator/:id',middleware, administratorController.getAdministrator);
router.get('/administratorByAdminName/:adminName', middleware, administratorController.getAdministratorByAdminName);
router.post('/administrator', middleware,administratorController.insertAdministrator);
router.put('/administrator', middleware,administratorController.updateAdministrator);
router.delete('/administrator/:id', middleware,administratorController.deleteAdministrator);

module.exports = router;