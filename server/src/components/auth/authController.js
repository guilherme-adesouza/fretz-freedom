const Security = require('../../utils/security');
const AuthService = require('./authService');


class AuthController {

	constructor() {
		this.authService = new AuthService();
	}

	async login(req, res) {
		const credentials = req.body;
		if (!!credentials) {
			if (!!credentials.token) {
				await this.authService.tokenLogin(credentials, res);
				return;
			} else if (!!credentials.email) {
				await this.authService.emailLogin(credentials, res);
				return;
			}
		}
		res.status(400).send({error: 'No authentication provided'});
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
