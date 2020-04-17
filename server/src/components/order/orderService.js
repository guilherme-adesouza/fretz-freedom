const BasicService = require('../../crud/baseService');
const OrderDAO = require('./orderDAO');

class OrderService extends BasicService {

	constructor(props) {
		super(OrderDAO)
	};
}

module.exports = OrderService;
