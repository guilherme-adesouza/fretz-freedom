const ItemGroupController = require('./itemGroupController');
const buildBaseAPI = require('../../../crud/baseAPI');

const controller = new ItemGroupController();
const router = buildBaseAPI(controller);

module.exports = router;
