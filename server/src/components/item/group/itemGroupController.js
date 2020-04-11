const ItemGroupSchema = require('./itemGroupSchema');
const ItemGroupService = require('./itemGroupService');
const BasicController = require('../../../crud/baseController');

class ItemGroupController extends BasicController {

	constructor(props) {
		super(ItemGroupService);
	}

	isValidObject(obj) {
		return super.isValidSchema(ItemGroupSchema, obj);
	}
}

module.exports = ItemGroupController;
