const BasicDAO = require('../../crud/basicDAO');

class RegionDAO extends BasicDAO {

	constructor(props) {
		super('regiao');
	}

}

module.exports = RegionDAO;
