const OrderTypeController = require('./orderTypeController');
const buildBaseAPI = require('../../../crud/baseAPI');

const controller = new OrderTypeController();
const router = buildBaseAPI(controller);

module.exports = router;
