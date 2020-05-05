const BasicService = require('../../crud/baseService');
const EstablishmentDAO = require('./establishmentDAO');

class EstablishmentService extends BasicService {

	constructor(props) {
		super(EstablishmentDAO);
	};
}

module.exports = EstablishmentService;
