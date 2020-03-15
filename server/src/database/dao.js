const db = require('./database');

class DAO {

    static async selectOne({table = '', fields = ['*'], params = {}, additionalQuery = ''}) {
        const query = {
            text: `SELECT ${fields.join(', ')} FROM ${table} ${getParams(params)} ${additionalQuery}`,
            values: Object.values(params)
        };
        const result =  await db.executeQuery(query);
        return result && result[0];
    }

    static async selectMany({table = '', fields = ['*'], join = "", params = {}, additionalQuery = ''}) {
        const query = {
            text: `SELECT ${fields.join(', ')} FROM ${table} ${join} ${getParams(params)} ${additionalQuery}`,
            values: Object.values(params)
        };
        return await db.executeQuery(query);
    }

    static async insert({table = '', values = {}}) {
        const query = {
            text: `INSERT INTO ${table} ${join(getFields(values))} VALUES ${getInsertValues(values)} RETURNING id`,
            values: Object.values(values)
        };
        return await db.executeQuery(query);
    }

    static async update({table = '', values = {}, params = {}}) {
        const numberParams = getFields(values).length;
        const query = {
            text: `UPDATE ${table} SET ${getUpdateValues(values)} ${getParams(params, numberParams)}`,
            values: Object.values(values).concat(Object.values(params))
        };
        return await db.executeQuery(query);
    }

    static async delete({table = '', params = {}}) {
        const query = {
            text: `DELETE FROM ${table} ${getParams(params)}`,
            values: Object.values(params)
        };
        const result = await db.executeQuery(query);
        return result && result[0];
    }

    static async custom({sql = '', values = []}){
        const query = {
            text: sql,
            values: values
        };
        return await db.executeQuery(query);
    }
}

/*FUNCTIONS*/

function getValues(params) {
    let values = Object.values(params);
    for (let i = 0; i < values.length; i++) {
        if (isNaN(values[i])) {
            values[i] = `%${values[i]}%`;
        }
    }
    return values;
}

function getFields(params){
    return Object.getOwnPropertyNames(params);
}

function join(array){
    return "( ".concat(array.join(', '), " )");
}

function paramIndex(index) {
    return `$${index + 1}`;
}

function getParams(params, baseIndex = 0){
    let query = 'WHERE 1 = 1';
    const columns = getFields(params);
    columns.forEach((column, index) => {
        query += ` AND ${column} = ${paramIndex(baseIndex + index)}`;
    });
    return query;
}

function getInsertValues(values){
    const indexValues = [];
    getFields(values).forEach((column, index) => {
        indexValues.push(paramIndex(index));
    });
    return join(indexValues);
}

function getUpdateValues(params){
    const values = [];
    getFields(params).forEach((column, index) => {
        values.push(`${column} = ${paramIndex(index)}`);
    });
    return values.join(', ');
}

module.exports = DAO;