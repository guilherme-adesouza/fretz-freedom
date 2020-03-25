const dao = require('../../database/dao');
const BasicDAO = require('../../crud/basicDAO');

class TokenDAO extends BasicDAO {

	constructor(props) {
		super('token');
	}

	async getByUserId(userId) {
		const params = {user_id: userId};
		return await dao.selectOne({table: this.table, params});
	};
}

module.exports = TokenDAO;
