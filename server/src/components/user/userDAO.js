const dao = require('../../database/dao').DAO;
const BasicDAO = require('../../crud/basicDAO');

class UserDAO extends BasicDAO {

	constructor(props) {
		super('usuario');
	}

	async getByEmail(email) {
		const params = {email};
		return await dao.selectOne({table: this.table, params});
	};
}

module.exports = UserDAO;
