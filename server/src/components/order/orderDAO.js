const dao = require('../../database/dao');
const BasicDAO = require('../../crud/basicDAO');

class OrderDAO extends BasicDAO {
	constructor(props) {
		super('pedido');
	}

	getByRegion({regions = []}) {
		const regionsIndex = dao.getInsertValues({regions});
		return dao.DAO.custom({
			sql: "SELECT pedido.* " +
				 "FROM pedido " + 
					 "JOIN cidade ON LEFT(cidade.cep, 5) = LEFT(pedido.cep, 5)" +
				 `WHERE cidade.regiao_id IN ${regionsIndex}`,
			values: regions
		});
	}
}

module.exports = OrderDAO;
