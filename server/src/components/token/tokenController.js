const TokenService = require('./tokenService');
const Validator = require('../../utils/requestValidators');
const { loggedUser } = require('../../utils/security');
const { uuid } = require('../../utils/randomUUID');

class TokenController {

	constructor() {
		this.service = new TokenService();
	}

	async create(req, res, next) {
		const obj = req.body;
		const user = loggedUser(req, res);
		let userId = user.id;

		if (!!obj && !!obj.userId) {
			if (user.super) {
				userId = obj.userId;
			} else {
				next({status: 403});
			}
		}

		const token = uuid();
		const data = await this.service.create({token, usuario_id: userId});

		if (Validator.queryResult(data, next)) {
			res.status(201).send({message: `Create successfully`, data});
		}
	}

	async getById(req, res, next) {
		const id = req.params.id;

		if (Validator.idRequest(id, next)) {
			const data = await this.service.getById(id);

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
		const tokens = await this.service.getAll();

		if (Validator.queryResult(tokens, next)) {
			res.status(200).send({tokens});
		}
	}

	async update(req, res, next) {
		const id = req.params.id;

		if (Validator.idRequest(id, next)) {
			const token = uuid();
			const object = await this.service.update(id, {token});

			if (Validator.queryResult(data, next)) {
				res.status(200).send({message: "Update successfully", object});
			}
		}
	}

	async deleteFn(req, res, next) {
		const id = req.params.id;

		if (Validator.idRequest(id, next)) {
			const data = await this.service.delete(id);

			if (Validator.queryResult(data, next)) {
				res.status(200).send({message: "Delete successfully"});
			}
		}
	}
}

module.exports = TokenController;
