const Security = require('./security');
const AuthDAO = require('./authDAO');


function validateLogin(credentials, user, res) {
	if (!!user && Security.compareEncryptPassword({
		encryptPassword: user.senha,
		password: credentials.password
	})) {
		res.cookie(Security.jwt_name, Security.generateJWT(user), {httpOnly: true});
		delete user.senha;
		res.send({user});
	} else {
		res.status(403).send({message: 'Credentials not valid'});
	}
}

class AuthService {

	constructor(props) {
		this.authDAO = new AuthDAO();
	}

	async emailLogin(credentials, res) {
		const user = await this.authDAO.getByEmail(credentials.email);
		validateLogin(credentials, user, res);
	}

	verifyAuth(req, res, next) {
		Security.checkToken(req, res, next);
	}
}

module.exports = AuthService;
