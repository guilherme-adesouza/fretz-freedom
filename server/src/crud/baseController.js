class BaseController {
	constructor(Service) {
		this.service = new Service();
	}

	checkValidObject(object, next) {
		if (!object || !this.isValidObject(object)) {
			next({status: 400, message: 'Not a valid object'});
			return false;
		}
		return true;
	}

	checkDatabaseError(object, next) {
		if (!!object.error || !!object[0].error) {
			next(object[0].error);
			return false;
		}
		return true;
	}

	checkIDRequest(id, next) {
		if (isNaN(id)) {
			next({status: 400, message: `ID '${id}' is not valid`});
			return false;
		}
		return true;
	}

	async create(req, res, next) {
		const obj = req.body;

		if (this.checkValidObject(obj, next)) {
			const data = await this.service.create(obj);
			if (this.checkDatabaseError(data, next)) {
				res.status(201).send({message: `Create successfully`, data: data[0]});
			}
		}
	}

	async getById(req, res, next) {
		const id = req.params.id;

		if(this.checkIDRequest(id, next)) {
			const data = await this.service.getById(id);
			if (!!data) {
				if(this.checkDatabaseError(data, next)) {
					res.status(200).send(data);
				}
			} else {
				res.status(404).send({message: `Object with id ${id} not found`});
			}
		}
	}

	async getAll(req, res, next) {
		const list = await this.service.getAll();
		if (this.checkDatabaseError(list, next)) {
			res.status(200).send(list);
		}
	}

	async update(req, res, next) {
		const id = req.params.id;

		if (this.checkIDRequest(id, next)) {
			const obj = req.body;
			if (this.checkValidObject(obj, next)) {
				const object = await this.service.update(id, obj);
				if (this.checkDatabaseError(object, next)) {
					res.status(200).send({message: "Update successfully", object});
				}
			}
		}
	}

	async deleteFn(req, res, next) {
		const id = req.params.id;

		if (this.checkIDRequest(id, next)) {
			const result = await this.service.delete(id);
			if (this.checkDatabaseError(result)) {
				res.status(200).send({message: "Delete successfully"});
			}
		}
	}

	isValidObject(obj) {
		return true;
	}
}

module.exports = BaseController;
