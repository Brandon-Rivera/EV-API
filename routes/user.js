const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');

//const middleware = '../middleware/jwt-middleware.js';

router.get('/user', userController.getUsers);
router.get('/user/:id', userController.getUser);
router.get('/userByFolio/:folio', userController.getUserByFolio);
router.post('/user', userController.insertUser);
router.put('/user', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

module.exports = router;