const BasicService = require('../../../crud/baseService');
const PersonTypeDAO = require('./personTypeDAO');

class PersonTypeService extends BasicService {

	constructor(props) {
		super(PersonTypeDAO)
	};
}

module.exports = PersonTypeService;
