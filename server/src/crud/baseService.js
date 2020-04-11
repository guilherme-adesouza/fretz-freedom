class BaseService {

	constructor(DAO) {
		this.DAO = new DAO();
	};

	async getById(id) {
		return await this.DAO.getById({params: {id}, fields: this.fields()});
	};

	async create(values) {
		const object = this.beforePersist(values, 'CREATE');
		return await this.DAO.insert({values: object});
	}

	async delete(id) {
		const params = {id};
		return await this.DAO.delete({params});
	}

	async update(id, values) {
		const params = {id};
		const object = this.beforePersist(values, 'UPDATE');
		return await this.DAO.update({values: object, params});
	}

	async getAll() {
		return await this.DAO.getAll({fields: this.fields()});
	}

	beforePersist(object, type = 'SAVE') {
		if (type === 'CREATE') {
			delete object.id;
		}
		return object;
	}

	fields() {
		return ["*"];
	}
}

module.exports = BaseService;
