import BaseServiceCRUD from "service/fretz/BaseServiceCRUD";

class GroupItemAPI extends BaseServiceCRUD {

    constructor() {
        super('/item/group')
    }
}

export default GroupItemAPI;
