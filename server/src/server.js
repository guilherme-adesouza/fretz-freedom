const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();

const routes = require('./routes');
const {
	notFoundHandler,
	errorHandler,
	logErrors,
	criticalHandler
} = require('./middlewares/defaultHandlers');

// JSON Request parser
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// CORS config
app.use(cors());
app.use(function(req, res, next) {
	res.header('Content-Type', 'application/json;charset=UTF-8');
	res.header('Access-Control-Allow-Credentials', true);
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

app.use('/api', routes);

app.get('/', (req, res) => {
	res.send({message: "Fretz & Freedom API it's working!"});
});

app.use(notFoundHandler);
app.use(errorHandler);
app.use(logErrors);
app.use(criticalHandler);

module.exports = app;
