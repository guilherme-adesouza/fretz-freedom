const express = require('express');
const router = express.Router();

const ItemController = require('./itemController');
const itemGroupAPI = require('./group/itemGroupAPI');
const buildBaseAPI = require('../../crud/baseAPI');

//has to call nested routes before to avoid conflicts
router.use('/group', itemGroupAPI);

const controller = new ItemController();
buildBaseAPI(controller, router);

module.exports = router;
