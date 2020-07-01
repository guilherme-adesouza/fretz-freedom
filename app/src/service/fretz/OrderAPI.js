import {request} from "service/fretz/FretzAPI";
import BaseServiceCRUD from "service/fretz/BaseServiceCRUD";

class OrderAPI extends BaseServiceCRUD {

    constructor() {
        super('/order')
    }

    getByRegion = async (query) => {
        const {data} = await request.post(`${this.url}/region`, query);
        return data;
    };

    getByTravel = async (query) => {
        const {data} = await request.post(`${this.url}/travel`, query);
        return data;
    };
}

export default OrderAPI;
