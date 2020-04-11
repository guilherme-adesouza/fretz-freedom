import BaseServiceCRUD from "service/fretz/BaseServiceCRUD";

class RegionAPI extends BaseServiceCRUD {

    constructor() {
        super('/region')
    }
}

export default RegionAPI;
