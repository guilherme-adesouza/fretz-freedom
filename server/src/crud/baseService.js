class BaseService {

	constructor(DAO) {
		this.DAO = new DAO();
	};

	async getById(id) {
		await this.DAO.getById({params: {id}, fields: this.fields()});
	};

	async create(values) {
		const object = this.beforePersist(values, 'CREATE');
		return this.DAO.insert({values: object});
	}

	async delete(id) {
		const params = {id};
		return this.DAO.delete({params});
	}

	async update(id, values) {
		const params = {id};
		const object = this.beforePersist(values, 'UPDATE');
		return this.DAO.update({values: object, params});
	}

	async getAll() {
		return this.DAO.getAll({fields: this.fields()});
	}

	beforePersist(object, type = 'SAVE') {
		return object;
	}

	fields() {
		return ["*"];
	}
}

module.exports = BaseService;
