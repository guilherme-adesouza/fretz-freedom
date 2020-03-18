const server = require('./server');
const {APP} = require('./utils/config');
const executeMigrations = require('./migrations');

executeMigrations(() => {
	server.listen(APP.PORT, () => {
		console.info(`Listening on port ${APP.PORT}...`);
		console.info(`Fretz & Freedom Server started!`)
	});
});
