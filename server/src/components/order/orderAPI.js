const express = require('express');
const router = express.Router();

const OrderController = require('./orderController');
const orderTypeAPI = require('./type/orderTypeAPI');
const buildBaseAPI = require('../../crud/baseAPI');

//has to call nested routes before to avoid conflicts
router.use('/type', orderTypeAPI);

const controller = new OrderController();
buildBaseAPI(controller, router);

router.post('/region', (req, res, next) => {
    controller.getByRegion(req, res, next);
});

router.post('/travel', (req, res, next) => {
    controller.getByTravel(req, res, next);
});


module.exports = router;
