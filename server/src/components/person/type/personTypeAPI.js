const PersonTypeController = require('./personTypeController');
const buildBaseAPI = require('../../../crud/baseAPI');

const controller = new PersonTypeController();
const router = buildBaseAPI(controller);

module.exports = router;
