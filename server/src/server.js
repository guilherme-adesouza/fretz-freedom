const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

const routes = require('./routes');
const {
	notFoundHandler,
	logErrors,
	errorHandler
} = require('./default_routes');

// JSON Request parser
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// CORS config
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
	res.header('Access-Control-Allow-Credentials', 'true');
	next();
});

app.use('/api', routes);

app.get('/', (req, res) => {
	res.send({message: "Fretz & Freedom API it's working!"});
});

app.use(notFoundHandler);
app.use(logErrors);
app.use(errorHandler);

module.exports = app;
