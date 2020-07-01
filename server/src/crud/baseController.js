const Validator = require('../middlewares/requestValidators');

class BaseController {
	constructor(Service) {
		this.service = new Service();
	}

	async create(req, res, next) {
		const obj = req.body;

		if (Validator.isObject(this.isValidObject, obj, next)) {
			const data = await this.service.create(obj);
			if (Validator.queryResult(data, next)) {
				res.status(201).send({message: `Create successfully`, data: data[0]});
			}
		}
	}

	async getById(req, res, next) {
		const id = req.params.id;

		if (Validator.idRequest(id, next)) {
			const data = await this.service.getById(Number(id));

			if (!data) {
				res.status(404).send({message: `Object with id ${id} not found`});
				return;
			}

			if (Validator.queryResult(data, next)) {
				res.status(200).send(data);
			}
		}
	}

	async getAll(req, res, next) {
		const list = await this.service.getAll();
		if (Validator.queryResult(list, next)) {
			res.status(200).send(list);
		}
	}

	async update(req, res, next) {
		const id = req.params.id;

		if (Validator.idRequest(id, next)) {
			const obj = req.body;
			if (Validator.isObject(this.isValidObject, obj, next)) {
				const object = await this.service.update(id, obj);
				if (Validator.queryResult(object, next)) {
					res.status(200).send({message: "Update successfully", object});
				}
			}
		}
	}

	async deleteFn(req, res, next) {
		const id = req.params.id;

		if (Validator.idRequest(id, next)) {
			const result = await this.service.delete(id);
			if (Validator.queryResult(result, next)) {
				res.status(200).send({message: "Delete successfully"});
			}
		}
	}

	isValidObject(obj) {
		return true;
	}

	isValidSchema(Schema, obj) {
		try {
			const valid = Schema.validateSync(obj, { stripUnknown: true });
			return Object.values(valid).length !== 0;
		} catch (e) { }
		return false;
	}
}

module.exports = BaseController;
