const BasicDAO = require('../../crud/basicDAO');

class PersonDAO extends BasicDAO {
	constructor(props) {
		super('pessoa');
	}
}

module.exports = PersonDAO;
