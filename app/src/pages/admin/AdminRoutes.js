import {AdminRoute} from "router/Route";
import CreateUser from "pages/admin/CreateUserPage";
import InternalData from "pages/admin/InternalDataPage";

const routes = [
    {
        path: '/admin/user/create',
        breadcrumbTitle: 'Criar Usuário',
        component: CreateUser,
    },
    {
        path: '/admin/data',
        breadcrumbTitle: 'Dados da aplicação',
        component: InternalData,
    },
];

export default {component: AdminRoute, routes};
