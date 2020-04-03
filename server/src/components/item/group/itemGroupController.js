const ItemGroupSchema = require('./itemGroupSchema');
const ItemGroupService = require('./itemGroupService');
const BasicController = require('../../../crud/baseController');

class ItemGroupController extends BasicController {

	constructor(props) {
		super(ItemGroupService);
	}

	isValidObject(obj) {
		const valid = ItemGroupSchema.validateSync(obj, { stripUnknown: true });
		return Object.values(valid).length !== 0;
	}
}

module.exports = ItemGroupController;
