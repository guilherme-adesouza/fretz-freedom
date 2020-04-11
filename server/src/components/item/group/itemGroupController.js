const ItemGroupSchema = require('./itemGroupSchema');
const ItemGroupService = require('./itemGroupService');
const BasicController = require('../../../crud/baseController');

class ItemGroupController extends BasicController {

	constructor(props) {
		super(ItemGroupService);
	}

	isValidObject(obj) {
		try {
			const valid = ItemGroupSchema.validateSync(obj, { stripUnknown: true });
			return Object.values(valid).length !== 0;
		} catch (e) { }
		return false;
	}
}

module.exports = ItemGroupController;
