import {request} from "./FretzAPI";

class UserAPI {
    static verifyAuth = async () => {
        const {data} = await request.get('/auth/verify');
        return data;
    };

    static login = async (credentials) => {
        const {data} = await request.post('/auth/login', credentials);
        return data;
    };

    static logout = async () => {
        await request.get('/auth/logout');
    }
}

export default UserAPI;
