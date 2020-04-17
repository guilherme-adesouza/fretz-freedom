import axios from "axios";

import UserAPI from "service/fretz/UserAPI";
import ItemAPI from "service/fretz/ItemAPI";
import GroupItemAPI from "service/fretz/GroupItemAPI";
import RegionAPI from "service/fretz/RegionAPI";
import VehicleAPI from "service/fretz/VehicleAPI";
import VehicleTypeAPI from "service/fretz/VehicleTypeAPI";
import PersonAPI from "service/fretz/PersonAPI";
import PersonTypeAPI from "service/fretz/PersonTypeAPI";

export const request = axios.create({
    baseURL: '/api',
    timeout: 1000,
});

class FretzAPI {
    static User = UserAPI;
    static Item = new ItemAPI();
    static GroupItem = new GroupItemAPI();
    static Region = new RegionAPI();
    static Vehicle = new VehicleAPI();
    static VehicleType = new VehicleTypeAPI();
    static Person = new PersonAPI();
    static PersonType = new PersonTypeAPI();
}

export default FretzAPI;
