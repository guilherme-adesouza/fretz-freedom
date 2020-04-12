import BaseServiceCRUD from "service/fretz/BaseServiceCRUD";

class VehicleTypeAPI extends BaseServiceCRUD {

    constructor() {
        super('/vehicle/type')
    }
}

export default VehicleTypeAPI;
