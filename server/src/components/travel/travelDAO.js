const BasicDAO = require('../../crud/basicDAO');

class TravelDAO extends BasicDAO {
	constructor(props) {
		super('viagem');
	}
}

module.exports = TravelDAO;
