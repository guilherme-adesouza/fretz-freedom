const {STATUS} = require('../helpers');
const UserService = require('./userService');
const BasicController = require('../../crud/baseController');

class UserController extends BasicController {
	constructor(props) {
		super(UserService);
	}

	// async createHelper(req, res, next) {
	// 	const user = {
	// 		nome: "Administrador",
	// 		senha: "123",
	// 		email: "admin@fretz.com",
	// 		situacao: STATUS.ACTIVE,
	// 		admin: true,
	// 		"super": true
	// 	};
	// 	const data = await this.service.create(user);
	// 	if (!!data[0].error) {
	// 		next(data[0].error)
	// 	} else {
	// 		res.status(201).send({message: `User ${user.nome} has been created!`, data: data[0]});
	// 	}
	// }
}

module.exports = UserController;
