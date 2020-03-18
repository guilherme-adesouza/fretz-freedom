const Config = require('../../utils/config');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secretKey = '61851011722cea986c8ef50e577e652ec4bafad6';
const jwt_name = '_fretz_freedom';

function decodeRequestToken(req) {
	const token = req.cookies[jwt_name];
	return !!token && decodeJWT(token);
}

function generateJWT(user, creationTime = null) {
	const expires = Date.now() + (parseInt(Config.APP.JWT_EXPIRATION_MINUTES) * 1000 * 60);
	if (!creationTime) {
		creationTime = expires;
	}
	return jwt.sign(JSON.stringify({user, expires, creationTime}), secretKey);
}

function isJWTExpires(jwt) {
	return true;
}

function decodeJWT(token) {
	return jwt.verify(token, secretKey);
}

function encrypt(string) {
	return bcryptjs.hashSync(string, 10);
}

function compareEncryptPassword({encryptPassword, password}) {
	return bcryptjs.compareSync(password, encryptPassword);
}

function sendAuthError(res) {
	return res.json({
		errors: ["You need to sign in or sign up before continuing."]
	});
}

function checkToken(req, res, next) {
	let token = decodeRequestToken(req);

	if (!!token) {
		next();
	} else {
		sendAuthError(res);
	}
}

module.exports = {
	secretKey,
	jwt_name,
	generateJWT,
	compareEncryptPassword,
	encrypt,
	checkToken,
};
