import axios from "axios";

import UserAPI from "service/fretz/UserAPI";
import ItemAPI from "service/fretz/ItemAPI";
import GroupItemAPI from "service/fretz/GroupItemAPI";
import RegionAPI from "service/fretz/RegionAPI";

export const request = axios.create({
    baseURL: '/api',
    timeout: 1000,
});

class FretzAPI {
    static User = UserAPI;
    static Item = new ItemAPI();
    static GroupItem = new GroupItemAPI();
    static Region = new RegionAPI();
}

export default FretzAPI;
