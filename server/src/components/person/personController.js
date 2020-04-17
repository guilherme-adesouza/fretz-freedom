const PersonService = require('./personService');
const BasicController = require('../../crud/baseController');

class PersonController extends BasicController {
	constructor(props) {
		super(PersonService);
	}
}

module.exports = PersonController;
