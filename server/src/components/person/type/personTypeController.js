const PersonTypeService = require('./personTypeService');
const BasicController = require('../../../crud/baseController');

class PersonTypeController extends BasicController {

	constructor(props) {
		super(PersonTypeService);
	}
}

module.exports = PersonTypeController;
