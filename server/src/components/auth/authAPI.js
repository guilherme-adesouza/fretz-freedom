const express = require('express');
const AuthController = require('./authController');
const router = express.Router();

const authController = new AuthController();

router.post('/login', (req, res) => {
	authController.login(req, res);
});

router.get('/verify', (req, res) => {
	authController.verifyAuth(req, res);
});

router.get('/logout', (req, res) => {
	authController.logout(res);
});

module.exports = router;
