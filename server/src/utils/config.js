require('dotenv').config();

const {
	PORT, HOST, API_TOKEN, JWT_EXPIRATION_MINUTES, JWT_MAX_DAYS_ALIVE,
	DEFAULT_DB, DB_USER, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT,
	DB_MASTER_USER, DB_MASTER_PASSWORD
} = process.env;


const Config = {
	'APP': {
		'PORT': PORT || 5000,
		'HOST': HOST || 'localhost',
		'API_TOKEN': API_TOKEN || '5BF2CDD9AF84BB7BB06B7361AC29C468BED3E9BFC8',
		'JWT_EXPIRATION_MINUTES': JWT_EXPIRATION_MINUTES || 120,
		'JWT_MAX_DAYS_ALIVE': JWT_MAX_DAYS_ALIVE || 7,
	},
	'DATABASE': {
		'DEFAULT_DB': DEFAULT_DB || 'postgres',
		'USER': DB_USER || 'fretz',
		'PASSWORD': DB_PASSWORD || 'fretz_913162afcdae75583c',
		'MASTER_USER': DB_MASTER_USER || 'postgres',
		'MASTER_PASSWORD': DB_MASTER_PASSWORD || 'postgres',
		'HOST': DB_HOST || 'localhost',
		'NAME': DB_NAME || 'fretz_freedom',
		'PORT': DB_PORT || 5432,
	},
};

module.exports = Config;
