import axios from "axios";

import UserAPI from "service/fretz/UserAPI";
import ItemAPI from "service/fretz/ItemAPI";
import GroupItemAPI from "service/fretz/GroupItemAPI";
import RegionAPI from "service/fretz/RegionAPI";
import VehicleAPI from "service/fretz/VehicleAPI";
import VehicleTypeAPI from "service/fretz/VehicleTypeAPI";
import OrderCategoryAPI from "service/fretz/OrderCategoryAPI";
import OrderAPI from "service/fretz/OrderAPI";
import PersonAPI from "service/fretz/PersonAPI";
import PersonTypeAPI from "service/fretz/PersonTypeAPI";
import EstablishmentAPI from "service/fretz/EstablishmentAPI";
import CityAPI from "service/fretz/CityAPI";
import TravelAPI from "service/fretz/TravelAPI";

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
    static OrderCategory = new OrderCategoryAPI();
    static Order = new OrderAPI();
    static Person = new PersonAPI();
    static PersonType = new PersonTypeAPI();
    static Establishment = new EstablishmentAPI();
    static City = new CityAPI();
    static Travel = new TravelAPI();
}

export default FretzAPI;
