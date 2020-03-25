const TokenService = require('./tokenService');
const BasicController = require('../../crud/baseController');

class TokenController {
	constructor(Service) {
		this.service = new TokenService();
	}

	async create(req, res, next) {
		const obj = req.body;
		const data = await this.service.create(obj);
		if (!data[0].error) {
			res.status(201).send({message: `Create successfully`, data});
		} else {
			next(data[0].error);
		}
	}

	async getById(req, res, next) {
		const id = req.params.id;

		if(isNaN(id)) {
			return res.status(400).send({message: 'ID is not valid'});
		}

		const data = await this.service.getById(id);

		if (!!data) {
			if (!data[0].error) {
				res.status(200).send(data);
			} else {
				next(data[0].error);
			}
		} else {
			res.status(404).send({message: `Object with id ${id} not found`})
		}
	}

	async getAll(req, res, next) {
		const list = await this.service.getAll();
		if (!list[0].error) {
			res.status(200).send(list);
		} else {
			next(list[0].error);
		}
	}

	async update(req, res, next) {
		const id = req.params.id;

		if(isNaN(id)) {
			return res.status(400).send({message: 'ID is not valid'});
		}

		const object = await this.service.update(id);
		if (!object[0].error) {
			res.status(200).send({message: "Update successfully", object});
		} else {
			next(object[0].error);
		}
	}

	async deleteFn(req, res, next) {
		const id = req.params.id;

		if(isNaN(id)) {
			return res.status(400).send({message: 'ID is not valid'});
		}

		await this.service.delete(id);
		res.status(200).send({message: "Delete successfully"});
	}
}

module.exports = TokenController;
