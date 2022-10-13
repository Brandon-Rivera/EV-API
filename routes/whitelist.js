const express = require('express');
const router = express.Router();
const whiteListController = require('../controller/whitelist.controller');

//const middleware = require('../middleware/jwt-middleware.js');

router.get('/whiteList', whiteListController.getwhiteLists);
router.get('/whiteList/:id', whiteListController.getwhiteList);
router.post('/whiteList', whiteListController.insertwhiteList);
router.put('/whiteList', whiteListController.updatewhiteList);
router.delete('/whiteList/:eMail', whiteListController.deletewhiteList);

module.exports = router;