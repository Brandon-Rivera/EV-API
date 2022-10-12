const express = require('express');
const router = express.Router();
const foodController = require('../controller/food.controller');

const middleware = require('../middleware/jwt-middleware.js');

router.get('/food', middleware, foodController.getFoods);
router.get('/food/:id', middleware, foodController.getFood);
router.get('/foodByName/:foodName', middleware, foodController.getFoodByName);
router.post('/food', middleware, foodController.insertFood);
router.put('/food', middleware, foodController.updateFood);
router.delete('/food/:id', middleware, foodController.deleteFood);

module.exports = router;