const express = require('express');
const router = express.Router();

const StateController = require('./stateController');
const buildBaseAPI = require('../../crud/baseAPI');

const controller = new StateController();
buildBaseAPI(controller, router);

module.exports = router;