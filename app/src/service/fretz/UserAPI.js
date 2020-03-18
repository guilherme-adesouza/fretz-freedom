import {request} from "./FretzAPI";

class UserAPI {
    static verifyAuth = async () => {
        const {data} = await request.get('/api/auth/verify');
        return data;
    };

    static logout = async () => {
        await request.get('/api/logout');
    }
}

export default UserAPI;
