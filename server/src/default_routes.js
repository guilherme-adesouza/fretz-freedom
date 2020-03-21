// 404 handler
function notFoundHandler(req, res, next) {
	res.status(404).send({message: "Sorry can't find that!"});
}

// log errors
function logErrors(err, req, res, next) {
	console.error(`[ERROR]: ${err.stack || JSON.stringify(err)}`);
	next(err)
}

// error handler
function errorHandler(err, req, res, next) {
	res.status(500).send({error: true, message: "Ops! A critical error happen!"});
}


module.exports = {
	notFoundHandler,
	logErrors,
	errorHandler
};
