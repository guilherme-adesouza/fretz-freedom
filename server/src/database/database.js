const { DATABASE } = require('../utils/config');

const Pool = require('pg').Pool;
const pool = new Pool({
    user: DATABASE.USER,
    host: DATABASE.HOST,
    database: DATABASE.NAME,
    password: DATABASE.PASSWORD,
    port: DATABASE.PORT,
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
