const Security = require('../../utils/security');
const UserDAO = require('../user/userDAO');
const TokenDAO = require('../token/tokenDAO');
const Validator = require('../../middlewares/requestValidators');

function sendCookie(user, res) {
	res.cookie(Security.jwt_name, Security.generateJWT(user), {httpOnly: true});
	delete user.senha;
	res.status(200).send({user});
}

function credentialsInvalid(res) {
	res.clearCookie(Security.jwt_name);
	res.status(403).send({message: 'Credentials not valid'});
}

class AuthService {

	constructor(props) {
		this.userDAO = new UserDAO();
		this.tokenDAO = new TokenDAO();
	}

	async emailLogin(credentials, res) {
		const user = await this.userDAO.getByEmail(credentials.email);
		if (!!user && Security.compareEncryptPassword({encryptPassword: user.senha, password: credentials.password})) {
			sendCookie(user, res);
		} else {
			credentialsInvalid(res);
		}
	}

	async tokenLogin(credentials, res) {
		const token = await this.tokenDAO.getByToken(credentials.token);
		if (Validator.queryResult(token) && !!token) {
			const user = await this.userDAO.getById(token.usuario_id);
			if (Validator.queryResult(user) && user.email === credentials.email) {
				sendCookie(user, res);
				return;
			}
		}
		credentialsInvalid(res);
	}

	verifyAuth(req, res, next) {
		Security.checkToken(req, res, (token) => {
			res.status(200).send({user: token.user})
		});
	}
}

module.exports = AuthService;
