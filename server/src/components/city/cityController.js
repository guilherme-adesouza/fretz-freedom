const CitySchema = require('./citySchema');
const CityService = require('./cityService');
const BasicController = require('../../crud/baseController');

class CityController extends BasicController {
	constructor(props) {
		super(CityService);
	}

	isValidObject(obj) {
		return super.isValidSchema(CitySchema, obj);
	}
}

module.exports = CityController;
