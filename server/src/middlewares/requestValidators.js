class Validators {
	static isObject(isValidObject, object, next) {
		if (!object || !isValidObject(object)) {
			next({status: 400, message: 'Not a valid object'});
			return false;
		}
		return true;
	}

	static queryResult(result, next) {
		if (Array.isArray(result)) {
			if (!!result[0] && !!result[0].error) {
				next(result[0].error);
				return false;
			}
		} else if (!!result && !!result.error) {
			next(result[0].error);
			return false;
		}
		return true;
	}

	static idRequest(id, next) {
		if (isNaN(id)) {
			next({status: 400, message: `ID '${id}' is not valid`});
			return false;
		}
		return true;
	}
}

module.exports = Validators;
