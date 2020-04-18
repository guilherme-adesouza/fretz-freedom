const express = require('express');
const router = express.Router();

const OrderTypeController = require('./orderTypeController');
const buildBaseAPI = require('../../../crud/baseAPI');

const controller = new OrderTypeController();
buildBaseAPI(controller, router);

module.exports = router;
