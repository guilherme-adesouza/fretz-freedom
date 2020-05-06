import BaseServiceCRUD from "service/fretz/BaseServiceCRUD";

class EstablishmentAPI extends BaseServiceCRUD {

    constructor() {
        super('/establishment')
    }
}

export default EstablishmentAPI;
