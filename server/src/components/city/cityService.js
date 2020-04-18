const BasicService = require('../../crud/baseService');
const CityDAO = require('./cityDAO');

class CityService extends BasicService {

	constructor(props) {
		super(CityDAO);
	};
}

module.exports = CityService;
