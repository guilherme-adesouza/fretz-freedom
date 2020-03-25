const Security = require('./security');
const UserDAO = require('../user/userDAO');


function validateLogin(credentials, user, res) {
	if (!!user && Security.compareEncryptPassword({
		encryptPassword: user.senha,
		password: credentials.password
	})) {
		res.cookie(Security.jwt_name, Security.generateJWT(user), {httpOnly: true});
		delete user.senha;
		res.status(200).send({user});
	} else {
		res.status(403).send({message: 'Credentials not valid'});
	}
}

class AuthService {

	constructor(props) {
		this.userDAO = new UserDAO();
	}

	async emailLogin(credentials, res) {
		const user = await this.userDAO.getByEmail(credentials.email);
		validateLogin(credentials, user, res);
	}

	verifyAuth(req, res, next) {
		Security.checkToken(req, res, (token) => {
			res.status(200).send({user: token.user})
		});
	}
}

module.exports = AuthService;
