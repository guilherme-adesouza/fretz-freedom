const OrdeTypeService = require('./orderTypeService');
const BasicController = require('../../../crud/baseController');
const OrderTypeSchema = require('./orderTypeSchema');

class OrderTypeController extends BasicController {
	constructor(props) {
		super(OrdeTypeService);
	}

	isValidObject(obj) {
		return super.isValidSchema(OrderTypeSchema, obj);
	}
}

module.exports = OrderTypeController;
