const express = require('express');
const {loggedIn} = require('../middlewares/authentication');

function buildBaseAPI(controller, router) {
	if (!router) {
		router = express.Router({mergeParams: true});
	}
	router.use(loggedIn);

	router.post('/', (req, res, next) => {
		controller.create(req, res, next);
	});

	router.get('/', (req, res, next) => {
		controller.getAll(req, res, next);
	});

	router.get('/:id', (req, res, next) => {
		controller.getById(req, res, next);
	});

	router.put('/:id', (req, res, next) => {
		controller.update(req, res, next);
	});

	router.delete('/:id', (req, res, next) => {
		controller.deleteFn(req, res, next);
	});

	return router;
}

module.exports = buildBaseAPI;
