const dao = require('../../database/dao');
const BasicDAO = require('../../crud/basicDAO');

class AuthDAO extends BasicDAO {

	constructor(props) {
		super('usuario');
	}

	async getByEmail(email) {
		const params = {email};
		return await dao.selectOne({table: this.table, params});
	};
}

module.exports = AuthDAO;
