const express = require('express');
const router = express.Router();

const TravelController = require('./travelController');
const buildBaseAPI = require('../../crud/baseAPI');

const controller = new TravelController();
buildBaseAPI(controller, router);

router.post('/:id/add-order', (req, res, next) => {
    controller.addOrders(req, res, next);
});

router.post('/:id/points', (req, res, next) => {
    controller.getPoints(req, res, next);
});

module.exports = router;