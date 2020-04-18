const BasicDAO = require('../../crud/basicDAO');

class StateDAO extends BasicDAO {

	constructor(props) {
		super('estado');
	}

}

module.exports = StateDAO;
