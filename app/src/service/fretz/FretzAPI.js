import axios from "axios";

import UserAPI from './UserAPI';

export const request = axios.create({
    baseURL: '/api',
    timeout: 1000,
});

class FretzAPI {
    static User = UserAPI;
}

export default FretzAPI;
