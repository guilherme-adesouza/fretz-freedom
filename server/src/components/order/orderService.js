const BasicService = require('../../crud/baseService');
const OrderDAO = require('./orderDAO');

class OrderService extends BasicService {

	constructor(props) {
		super(OrderDAO)
	};

	async getByRegion(regions = []) {
		return await this.DAO.getByRegion({regions});
	}

	async getByTravel(viagem_id = null) {
		return await this.DAO.getAll({params: {viagem_id}});
	}
}

module.exports = OrderService;
