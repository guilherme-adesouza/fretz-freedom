import {request} from "service/fretz/FretzAPI";
import BaseServiceCRUD from "service/fretz/BaseServiceCRUD";

class TravelAPI extends BaseServiceCRUD {

    constructor() {
        super('/travel')
    }

    getPoints = async (id) => {
        const {data} = await request.post(`${this.url}/${id}/points`);
        return data;
    }
}

export default TravelAPI;
