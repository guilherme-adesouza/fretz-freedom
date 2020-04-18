const TravelSchema = require('./travelSchema');
const TravelService = require('./travelService');
const BasicController = require('../../crud/baseController');

class TravelController extends BasicController {
	constructor(props) {
		super(TravelService);
	}

	isValidObject(obj) {
		return super.isValidSchema(TravelSchema, obj);
	}
}

module.exports = TravelController;
