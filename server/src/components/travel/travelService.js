const BasicService = require('../../crud/baseService');
const TravelDAO = require('./travelDAO');

class TravelService extends BasicService {
	constructor(props) {
		super(TravelDAO);
	};

	getPoints(id) {
		return this.DAO.custom( 
			"SELECT pessoa.* "+
			"FROM pessoa "+
			"JOIN pedido "+
			"   ON pedido.pessoa_id = pessoa.id "+
			`WHERE pedido.viagem_id = $1`,
			[id]
		);
	}
}

module.exports = TravelService;
