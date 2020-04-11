const express = require('express');
const router = express.Router();

const RegionController = require('./regionController');
const buildBaseAPI = require('../../crud/baseAPI');

const controller = new RegionController();
buildBaseAPI(controller, router);

module.exports = router;