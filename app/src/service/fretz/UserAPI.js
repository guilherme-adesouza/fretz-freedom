import {request} from "service/fretz/FretzAPI";
import BaseServiceCRUD from "service/fretz/BaseServiceCRUD";

class UserAPI extends BaseServiceCRUD {

    constructor() {
        super('/user')
    }

    verifyAuth = async () => {
        const {data} = await request.get('/auth/verify');
        return data;
    };

    login = async (credentials) => {
        const {data} = await request.post('/auth/login', credentials);
        return data;
    };

    logout = async () => {
        await request.get('/auth/logout');
    };
}

export default UserAPI;
