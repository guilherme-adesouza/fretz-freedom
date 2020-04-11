const BasicService = require('../../crud/baseService');
const RegionDAO = require('./regionDAO');

class RegionService extends BasicService {

	constructor(props) {
		super(RegionDAO);
	};
}

module.exports = RegionService;
