const express = require('express');
const router = express.Router();

const PersonController = require('./personController');
const PersonTypeAPI = require('./type/personTypeAPI');
const buildBaseAPI = require('../../crud/baseAPI');

//has to call nested routes before to avoid conflicts
router.use('/type', PersonTypeAPI);

const controller = new PersonController();
buildBaseAPI(controller, router);

module.exports = router;
