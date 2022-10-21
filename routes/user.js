const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');

const middleware = require('../middleware/jwt-middleware.js');

router.get('/user', middleware, userController.getUsers);
router.get('/user/:id', middleware, userController.getUser);
router.get('/userByFolio/:folio', middleware, userController.getUserByFolio);
router.get('/userByName/:userName', middleware, userController.getUserByName);
router.post('/user', middleware, userController.insertUser);
router.put('/user', middleware, userController.updateUser);
router.delete('/user/:id', middleware, userController.deleteUser);

module.exports = router;