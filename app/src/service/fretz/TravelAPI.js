import BaseServiceCRUD from "service/fretz/BaseServiceCRUD";

class TravelAPI extends BaseServiceCRUD {

    constructor() {
        super('/travel')
    }
}

export default TravelAPI;
