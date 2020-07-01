const BasicDAO = require('../../../crud/basicDAO');

class OrderItemDAO extends BasicDAO {
	constructor(props) {
		super('pedido_has_item');
	}
}

module.exports = OrderItemDAO;
