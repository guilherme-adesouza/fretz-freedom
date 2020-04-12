import {PrivateRoute} from 'router/Route';
import Home from 'pages/private/HomePage';
import ItemGroups from 'pages/private/ItemGroups';
import Items from 'pages/private/Items';
import Vehicles from 'pages/private/Vehicles';

const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/item/groups',
        component: ItemGroups
    },
    {
        path: '/items',
        component: Items
    },
    {
        path: '/vehicles',
        component: Vehicles
    }
];

export default {component: PrivateRoute, routes};
