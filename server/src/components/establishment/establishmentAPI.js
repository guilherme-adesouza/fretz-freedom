const express = require('express');
const router = express.Router();

const EstablishmentController = require('./establishmentController');
const buildBaseAPI = require('../../crud/baseAPI');

const controller = new EstablishmentController();
buildBaseAPI(controller, router);

module.exports = router;