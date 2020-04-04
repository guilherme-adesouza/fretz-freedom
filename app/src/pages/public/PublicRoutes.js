import {Route} from "react-router-dom";

import Login from "pages/public/LoginPage";

const routes = [
    {
        path: '/',
        component: Login
    },
    // {
    //     path: '/404',
    //     component: NotFound,
    // },
    // {
    //     path: '/login',
    //     component: Login,
    // },
    // {
    //     path: '/loading',
    //     component: Loading,
    // },
    // {
    //     path: '/403',
    //     component: Forbidden,
    // },
    // {
    //     path: '/error',
    //     component: Error,
    // },
    // {
    //     component: NotFound,
    // }
];

export default {component: Route, routes};
