import {PrivateRoute} from 'router/Route';
import Home from 'pages/private/HomePage';
import ItemGroups from 'pages/private/ItemGroups';

const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/itemgroups',
        component: ItemGroups
    }
];

export default {component: PrivateRoute, routes};
