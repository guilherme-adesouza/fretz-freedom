const StateSchema = require('./stateSchema');
const StateService = require('./stateService');
const BasicController = require('../../crud/baseController');

class StateController extends BasicController {
	constructor(props) {
		super(StateService);
	}

	isValidObject(obj) {
		return super.isValidSchema(StateSchema, obj);
	}
}

module.exports = StateController;
