const express = require('express');
const router = express.Router();
const foodController = require('../controller/food.controller');

//const middleware = '../middleware/jwt-middleware.js';

router.get('/food', foodController.getFoods);
router.get('/food/:id', foodController.getFood);
router.post('/food', foodController.insertFood);
router.put('/food', foodController.updateFood);
router.delete('/food/:id', foodController.deleteFood);

module.exports = router;