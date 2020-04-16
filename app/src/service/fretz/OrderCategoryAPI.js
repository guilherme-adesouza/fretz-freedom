import BaseServiceCRUD from "service/fretz/BaseServiceCRUD";

class OrderCategoryAPI extends BaseServiceCRUD {

    constructor() {
        super('/order/category')
    }
}

export default OrderCategoryAPI;
