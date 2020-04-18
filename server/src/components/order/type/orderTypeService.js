const BasicService = require('../../../crud/baseService');
const OrderTypeDAO = require('./orderTypeDAO');

class OrderTypeService extends BasicService {

	constructor(props) {
		super(OrderTypeDAO)
	};
}

module.exports = OrderTypeService;
