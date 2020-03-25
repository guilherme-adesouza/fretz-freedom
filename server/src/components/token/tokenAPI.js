const express = require('express');
const TokenController = require('./tokenController');
const router = express.Router();

const controller = new TokenController();
const buildBaseAPI = require('../../crud/baseAPI');

buildBaseAPI(controller, router);

module.exports = router;
