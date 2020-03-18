import axios from "axios";

import UserAPI from './UserAPI';

export const request = axios.create({
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

class FretzAPI {
    static User = UserAPI;
}

export default FretzAPI;
