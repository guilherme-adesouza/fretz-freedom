import {PrivateRoute} from 'router/Route';
import Home from "pages/private/HomePage";

const routes = [
    {
        path: '/home',
        component: Home
    }
];

export default {component: PrivateRoute, routes};
