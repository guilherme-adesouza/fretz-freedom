const OrderService = require('./orderService');
const OrderItemService = require('./item/orderItemService');
const BasicController = require('../../crud/baseController');
const Validator = require('../../middlewares/requestValidators');
const OrderSchema = require('./orderSchema');

class OrderController extends BasicController {
	constructor(props) {
		super(OrderService);
		this.orderItemService = new OrderItemService();
	}

	async createItems(req, {order, items, next}, cb) {
		if ((items || []).length > 0) {
			const data = await this.orderItemService.addItems(req, {orderId: order.id, items});
			if (Validator.queryResult(data, next)) {
				cb();
			}
		}
	}

	async create(req, res, next) {
		const {items, ...obj} = req.body;

		if (Validator.isObject(this.isValidObject, obj, next)) {
			const dataOrder = await this.service.create(obj);
			if (Validator.queryResult(dataOrder, next)) {
				this.createItems(req, {order: dataOrder[0], items, next}, () => {
					res.status(201).send({message: `Create successfully`, data: dataOrder[0]});
				})
			}
		}
	}

	async update(req, res, next) {
		const id = req.params.id;

		if (Validator.idRequest(id, next)) {
			const {items, ...obj} = req.body;
			if (Validator.isObject(this.isValidObject, obj, next)) {
				const object = await this.service.update(id, obj);
				if (Validator.queryResult(object, next)) {
					this.createItems(req, {order: id, items, next}, () => {
						res.status(200).send({message: "Update successfully", object});
					})
				}
			}
		}
	}

	async getByRegion(req, res, next) {
		const {regions} = req.body;
		if (regions.every(r => typeof r === 'number')) {
			const data = await this.service.getByRegion(regions);
			if (Validator.queryResult(data, next)) {
				res.status(200).send(data);
			}
		} else {
			next({status: 400, message: 'Regions invalid'});
		}
	}

	async getByTravel(req, res, next) {
		const {travelId} = req.body;
		if (!isNaN(travelId)) {
			const data = await this.service.getByTravel(travelId);
			if (Validator.queryResult(data, next)) {
				res.status(200).send(data);
			}
		} else {
			next({status: 400, message: 'Travel invalid'});
		}
	}

	isValidObject(obj) {
		return super.isValidSchema(OrderSchema, obj);
	}
}

module.exports = OrderController;
