const BasicDAO = require('../../../crud/basicDAO');

class OrderTypeDAO extends BasicDAO {
	constructor(props) {
		super('categoria_pedido');
	}
}

module.exports = OrderTypeDAO;
