import BaseServiceCRUD from "service/fretz/BaseServiceCRUD";

class CityAPI extends BaseServiceCRUD {

    constructor() {
        super('/city')
    }
}

export default CityAPI;
