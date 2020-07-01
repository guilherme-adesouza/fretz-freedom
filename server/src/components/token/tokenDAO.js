const dao = require('../../database/dao').DAO;
const BasicDAO = require('../../crud/basicDAO');

class TokenDAO extends BasicDAO {

	constructor(props) {
		super('token');
	}

	async getByUserId(userId) {
		const params = {usuario_id: userId};
		return await dao.selectOne({table: this.table, params});
	};

	async getByToken(token) {
		const params = {token};
		return await dao.selectOne({table: this.table, params});
	};
}

module.exports = TokenDAO;
