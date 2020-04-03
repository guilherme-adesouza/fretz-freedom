const BasicDAO = require('../../../crud/basicDAO');

class ItemGroupDAO extends BasicDAO {

	constructor(props) {
		super('grupo_item');
	}
}

module.exports = ItemGroupDAO;
