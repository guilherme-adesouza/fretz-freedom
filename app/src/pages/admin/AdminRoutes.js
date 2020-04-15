import {AdminRoute} from 'router/Route';
import CreateUser from "pages/admin/CreateUserPage";

const routes = [
    {
        path: '/admin/user/create',
        breadcrumbTitle: 'Criar Usuário',
        component: CreateUser,
    }
];

export default {component: AdminRoute, routes};
