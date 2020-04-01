const { v4 } = require('uuid');

function uuid() {
	return v4();
}

module.exports = {
	uuid
};
