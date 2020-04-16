import {PrivateRoute} from 'router/Route';
import Home from 'pages/private/HomePage';
import ItemGroups from 'pages/private/ItemGroups';
import Items from 'pages/private/Items';
import Vehicles from 'pages/private/Vehicles';
import Region from 'pages/private/Region';
import Client from 'pages/private/Clients';
import Viagem from 'pages/private/Viagem';

const routes = [
    {
        path: '/home',
        breadcrumbTitle: 'Página Inicial',
        component: Home,
    },
    {
        path: '/item/groups',
        breadcrumbTitle: 'Grupo de Itens',
        component: ItemGroups,
    },
    {
        path: '/items',
        breadcrumbTitle: 'Itens',
        component: Items,
    },
    {
        path: '/vehicles',
        breadcrumbTitle: 'Veículos',
        component: Vehicles,
    },
    {
        path: '/region',
        breadcrumbTitle: 'Regiões',
        component: Region,
    },
    {
        path: '/client',
        breadcrumbTitle: 'Clientes',
        component: Client,
    },
    {
        path: '/viagem',
        breadcrumbTitle: 'Viagem',
        component: Viagem,
    }
];

export default {component: PrivateRoute, routes};
