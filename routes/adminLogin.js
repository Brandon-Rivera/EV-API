const express = require('express');
const router = express.Router();
const loginController = require('../controller/adminLogin.controller');

router.post('/adminlogin', loginController.insertLogin);
router.post('/adminregister', loginController.insertAdmin);

module.exports = router;