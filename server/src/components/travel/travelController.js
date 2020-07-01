const TravelSchema = require('./travelSchema');
const TravelService = require('./travelService');
const OrderService = require('../order/orderService');

const BasicController = require('../../crud/baseController');
const Validator = require('../../middlewares/requestValidators');

class TravelController extends BasicController {
	constructor(props) {
		super(TravelService);
		this.orderService = new OrderService();
	}

	async addOrders(req, res, next) {
		const id = req.params.id;
		const {orders} = req.body;

		if (Validator.idRequest(id, next)) {
			let ordersUpdate = [];
			for (let order of orders) {
				if(isNaN(order)) continue;
				const object = await this.orderService.update(order, {viagem_id: id});
				if (Validator.queryResult(object, next)) {
					ordersUpdate.push({orderId: order});
				}
			}
			res.status(200).send({message: "Orders add successfully", orders: ordersUpdate});
		}
	} 

	async getPoints(req, res, next) {
		const id = req.params.id;

		if (Validator.idRequest(id, next)) {
			const list = await this.service.getPoints(id);
			if (Validator.queryResult(list, next)) {
				res.status(200).send(list);	
			}
		}
	} 

	isValidObject(obj) {
		return super.isValidSchema(TravelSchema, obj);
	}
}

module.exports = TravelController;
