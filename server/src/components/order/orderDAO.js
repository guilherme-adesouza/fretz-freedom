const BasicDAO = require('../../crud/basicDAO');

class OrderDAO extends BasicDAO {
	constructor(props) {
		super('pedido');
	}
}

module.exports = OrderDAO;
