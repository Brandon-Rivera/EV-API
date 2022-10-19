const express = require('express');
const router = express.Router();
const idealValuesController = require('../controller/idealValues.controller');

const middleware = require('../middleware/jwt-middleware.js');

router.get('/idealvalues', middleware, idealValuesController.getidealsValues);
router.get('/idealvalues/:id',middleware, idealValuesController.getidealValues);
router.post('/idealvalues', middleware,idealValuesController.insertIdealValues);
router.put('/idealvalues', middleware,idealValuesController.updateIdealValues);
router.delete('/idealvalues/:id', middleware,idealValuesController.deleteIdealValues);

module.exports = router;