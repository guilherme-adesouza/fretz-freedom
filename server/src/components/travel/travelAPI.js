const express = require('express');
const router = express.Router();

const TravelController = require('./travelController');
const buildBaseAPI = require('../../crud/baseAPI');

const controller = new TravelController();
buildBaseAPI(controller, router);

module.exports = router;