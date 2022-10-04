const express = require('express');
const router = express.Router();
const loginController = require('../controller/adminLogin.controller');

router.post('/login', loginController.insertLogin);
router.post('/register', loginController.insertUsuario);

module.exports = router;