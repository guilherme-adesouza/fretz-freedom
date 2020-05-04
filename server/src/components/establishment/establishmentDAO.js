const BasicDAO = require('../../crud/basicDAO');

class EstablishmentDAO extends BasicDAO {

	constructor(props) {
		super('estabelecimento');
	}

}

module.exports = EstablishmentDAO;
