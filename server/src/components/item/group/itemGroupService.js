const BasicService = require('../../../crud/baseService');
const ItemGroupDAO = require('./itemGroupDAO');

class ItemGroupService extends BasicService {

	constructor(props) {
		super(ItemGroupDAO)
	};
}

module.exports = ItemGroupService;
