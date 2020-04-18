const OrderService = require('./orderService');
const BasicController = require('../../crud/baseController');
const OrderSchema = require('./orderSchema');

class OrderController extends BasicController {
	constructor(props) {
		super(OrderService);
	}

	isValidObject(obj) {
		return super.isValidSchema(OrderSchema, obj);
	}
}

module.exports = OrderController;
