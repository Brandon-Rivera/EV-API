const express = require('express');
const router = express.Router();
const administratorController = require('../controller/administrator.controller');

//const middleware = '../middleware/jwt-middleware.js';

router.get('/administrator', administratorController.getAdministrators);
router.get('/administrator/:id', administratorController.getAdministrator);
router.post('/administrator', administratorController.insertAdministrator);
router.put('/administrator', administratorController.updateAdministrator);
router.delete('/administrator/:id', administratorController.deleteAdministrator);

module.exports = router;