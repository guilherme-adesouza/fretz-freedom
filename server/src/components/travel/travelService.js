const BasicService = require('../../crud/baseService');
const TravelDAO = require('./travelDAO');

class TravelService extends BasicService {
	constructor(props) {
		super(TravelDAO);
	};
}

module.exports = TravelService;
