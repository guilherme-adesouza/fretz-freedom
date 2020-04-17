import BaseServiceCRUD from "service/fretz/BaseServiceCRUD";

class PersonAPI extends BaseServiceCRUD {

    constructor() {
        super('/person')
    }
}

export default PersonAPI;
