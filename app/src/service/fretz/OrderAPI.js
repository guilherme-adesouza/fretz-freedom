import BaseServiceCRUD from "service/fretz/BaseServiceCRUD";

class OrderAPI extends BaseServiceCRUD {

    constructor() {
        super('/order')
    }
}

export default OrderAPI;
