import {Route} from "react-router-dom";

import Login from "pages/public/LoginPage";
import NotFound from "pages/public/NotFound";
import AboutUs from "pages/public/AboutUs";

const routes = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/aboutus',
        component: AboutUs,
    },
    {
        path: '*',
        component: NotFound,
    },
];

export default {component: Route, routes};
