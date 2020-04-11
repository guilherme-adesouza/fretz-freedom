const RegionSchema = require('./regionSchema');
const RegionService = require('./regionService');
const BasicController = require('../../crud/baseController');

class RegionController extends BasicController {
	constructor(props) {
		super(RegionService);
	}

	isValidObject(obj) {
		return super.isValidSchema(RegionSchema, obj);
	}
}

module.exports = RegionController;
