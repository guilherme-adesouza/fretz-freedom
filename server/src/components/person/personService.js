const BasicService = require('../../crud/baseService');
const PersonDAO = require('./personDAO');

class PersonService extends BasicService {

	constructor(props) {
		super(PersonDAO)
	};
}

module.exports = PersonService;
