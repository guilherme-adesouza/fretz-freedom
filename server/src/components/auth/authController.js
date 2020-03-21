const Security = require('./security');
const AuthService = require('./authService');


class AuthController {
	constructor() {
		this.authService = new AuthService();
	}

	login(req, res) {
		const credentials = req.body;
		this.authService.emailLogin(credentials, res);
	}

	verifyAuth(req, res, next) {
		this.authService.verifyAuth(req, res, next);
	}

	logout(res) {
		res.clearCookie(Security.jwt_name);
		res.sendStatus(200);
	}
}

module.exports = AuthController;
