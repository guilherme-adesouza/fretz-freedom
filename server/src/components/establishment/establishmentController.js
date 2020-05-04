const EstablishmentSchema = require('./establishmentSchema');
const EstablishmentService = require('./establishmentService');
const BasicController = require('../../crud/baseController');

class EstablishmentController extends BasicController {
	constructor(props) {
		super(EstablishmentService);
	}

	isValidObject(obj) {
		return super.isValidSchema(EstablishmentSchema, obj);
	}
}

module.exports = EstablishmentController;
