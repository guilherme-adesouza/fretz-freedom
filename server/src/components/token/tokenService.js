const Security = require('../auth/security');
const BasicService = require('../../crud/baseService');
const TokenDAO = require('./tokenDAO');

class TokenService extends BasicService {

	constructor(props) {
		super(TokenDAO);
	};
}

module.exports = TokenService;
