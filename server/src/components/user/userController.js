const {STATUS} = require('../helpers');
const UserService = require('./userService');
const BasicController = require('../../crud/baseController');
const UserSchema = require('./userSchema');

class UserController extends BasicController {
	constructor(props) {
		super(UserService);
	}

	isValidObject(obj) {
		return super.isValidSchema(UserSchema, obj);
	}
}

module.exports = UserController;
