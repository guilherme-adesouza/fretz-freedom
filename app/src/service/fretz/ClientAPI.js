import BaseServiceCRUD from "service/fretz/BaseServiceCRUD";

class ClientAPI extends BaseServiceCRUD {

    constructor() {
        super('/client')
    }
}

export default ClientAPI;
