const BasicDAO = require('../../../crud/basicDAO');

class PersonDAO extends BasicDAO {
	constructor(props) {
		super('tipo_pessoa');
	}
}

module.exports = PersonDAO;
