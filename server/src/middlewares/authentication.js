const Security = require('../utils/security');

function loggedIn(req, res, next) {
	Security.checkToken(req, res, () => next())
}

function admin(req, res, next) {
	Security.checkToken(req, res, (token) => {
		if (token.user.admin) {
			next()
		} else {
			next({status: 403, message: 'Action not allowed'})
		}
	})
}

function superUser(req, res, next) {
	Security.checkToken(req, res, (token) => {
		if (token.user.super) {
			next()
		} else {
			next({status: 403, message: 'Action not allowed'})
		}
	})
}

module.exports = {
	loggedIn,
	admin,
	superUser
};
