const Config = require('../utils/config');

const Pool = require('pg').Pool;
const pool = new Pool({
    user: Config.DATABASE.USER,
    host: Config.DATABASE.HOST,
    database: Config.DATABASE.NAME,
    password: Config.DATABASE.PASSWORD,
    port: Config.DATABASE.PORT,
});

async function executeQuery(query) {
    console.info('[QUERY]: ', JSON.stringify(query));
    try {
        const result = await pool.query(query);
        return result.rows;
    } catch (error) {
        console.error(error);
        return [{error: `Error executing query. ${error}`}];
    }
};

module.exports = {
    executeQuery
};