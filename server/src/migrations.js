const {DATABASE} = require('./utils/config');
const DBMigrate = require('db-migrate');

const dbConfig = {
	dev: {
		user: DATABASE.USER,
		host: DATABASE.HOST,
		database: DATABASE.NAME,
		password: DATABASE.PASSWORD,
		port: DATABASE.PORT,
		driver: 'pg'
	}
};

const dbmEnterprise = DBMigrate.getInstance(true, {env: 'dev', config: dbConfig});
const dbStartConfig = dbConfig;
dbStartConfig.dev.database = DATABASE.DEFAULT_DB;
const dbmStart = DBMigrate.getInstance(true, {env: 'dev', config: dbStartConfig});

async function executeMigrations(fn) {
	try {
		await dbmStart.createDatabase(DATABASE.NAME);
	} catch (e) {
	}
	await dbmEnterprise.up();
	fn();
}

module.exports = executeMigrations;
