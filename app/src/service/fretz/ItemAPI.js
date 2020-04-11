import BaseServiceCRUD from "service/fretz/BaseServiceCRUD";

class ItemAPI extends BaseServiceCRUD {

    constructor() {
        super('/item')
    }
}

export default ItemAPI;
