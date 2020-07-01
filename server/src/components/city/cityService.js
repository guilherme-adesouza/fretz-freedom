const BasicService = require('../../crud/baseService');
const CityDAO = require('./cityDAO');

class CityService extends BasicService {

	constructor(props) {
		super(CityDAO);
	};

	async getById(id) {
		return await this.DAO.getById({params: {cod_cidade: id}, fields: this.fields()});
	};

	async update(id, values) {
		const params = {cod_cidade: id};
		const object = this.beforePersist(values, 'UPDATE');
		return await this.DAO.update({values: object, params});
	}

	beforePersist(object, type = 'SAVE') {
		if (type === 'CREATE') {
			delete object.cod_cidade;
		}
		return object;
	}
}

module.exports = CityService;
