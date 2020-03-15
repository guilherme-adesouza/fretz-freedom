const dao = require('../database/dao');

class BasicDAO {

    constructor(table) {
        this.table = table;
    }

    async getById(params) {
        return await dao.selectOne({table: this.table, ...params});
    };

    insert(params) {
        return dao.insert({table: this.table, ...params});
    }

    delete(params) {
        return dao.delete({table: this.table, ...params});
    }

    update(params) {
        return dao.update({table: this.table, ...params});
    }

    getAll(params) {
        return dao.selectMany({table: this.table, ...params});
    }

}

module.exports = BasicDAO;