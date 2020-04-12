import BaseServiceCRUD from "service/fretz/BaseServiceCRUD";

class VehicleAPI extends BaseServiceCRUD {

    constructor() {
        super('/vehicle')
    }
}

export default VehicleAPI;
