const express = require('express');
const router = express.Router();

const CityController = require('./cityController');
const buildBaseAPI = require('../../crud/baseAPI');

const controller = new CityController();
buildBaseAPI(controller, router);

module.exports = router;