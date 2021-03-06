const Security = require('../../utils/security');
const BasicService = require('../../crud/baseService');
const UserDAO = require('./userDAO');

class UserService extends BasicService {

	constructor(props) {
		super(UserDAO);
	};

	beforePersist(object) {
		let user = object;
		if (!!object.senha) {
			user.senha = Security.encrypt(object.senha);
		}
		return super.beforePersist(user);
	}

	fields() {
		return ['id', 'nome', 'situacao', 'img', 'admin', 'super'];
	}
}

module.exports = UserService;
