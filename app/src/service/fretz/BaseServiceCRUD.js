import {request} from "service/fretz/FretzAPI";

class BaseServiceCRUD {

    constructor(url) {
        this.url = url;
    }

    create = async (object) => {
        const {data} = await request.post(this.url, object);
        return data;
    };

    update = async (id, object) => {
        const {data} = await request.put(`${this.url}/${id}`, object);
        return data;
    };

    delete = async (id) => {
        const {data} = await request.delete(`${this.url}/${id}`);
        return data;
    };

    getAll = async () => {
        const {data} = await request.get(`${this.url}`);
        return data;
    };

    getOne = async (id) => {
        const {data} = await request.get(`${this.url}/${id}`);
        return data;
    }
}

export default BaseServiceCRUD;
