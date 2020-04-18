const BasicService = require('../../crud/baseService');
const StateDAO = require('./stateDAO');

class StateService extends BasicService {

	constructor(props) {
		super(StateDAO);
	};
}

module.exports = StateService;
