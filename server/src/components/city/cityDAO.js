const BasicDAO = require('../../crud/basicDAO');

class CityDAO extends BasicDAO {

	constructor(props) {
		super('cidade');
	}

}

module.exports = CityDAO;
