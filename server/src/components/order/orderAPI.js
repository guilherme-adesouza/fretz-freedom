const express = require('express');
const router = express.Router();

const OrderController = require('./orderController');
const OrderTypeAPI = require('./type/orderTypeAPI');
const buildBaseAPI = require('../../crud/baseAPI');

//has to call nested routes before to avoid conflicts
router.use('/type', OrderTypeAPI);

const controller = new OrderController();
buildBaseAPI(controller, router);

module.exports = router;
