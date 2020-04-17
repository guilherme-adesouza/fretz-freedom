import BaseServiceCRUD from "service/fretz/BaseServiceCRUD";

class PersonTypeAPI extends BaseServiceCRUD {

    constructor() {
        super('/person/type')
    }
}

export default PersonTypeAPI;
