import {PrivateRoute} from 'router/Route';
import Home from 'pages/private/HomePage';
import ItemGroups from 'pages/private/ItemGroups';
import Items from 'pages/private/Items';
import Vehicles from 'pages/private/Vehicles';
import Region from 'pages/private/Region';
import Client from 'pages/private/Clients';
import Order from 'pages/private/Orders';
import Travel from 'pages/private/Travel';
import Establishment from 'pages/private/Establishment';
import ConfigSession from 'pages/private/ConfigSession';

const routes = [
    {
        path: '/home',
        breadcrumbTitle: 'Página Inicial',
        component: Home,
    },
    {
        path: '/item/groups',
        breadcrumbTitle: 'Grupos de Itens',
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
        path: '/order',
        breadcrumbTitle: 'Pedidos',
        component: Order,
    },
    {
        path: '/travel',
        breadcrumbTitle: 'Viagem',
        component: Travel,
    },
    {
        path: '/establishment',
        breadcrumbTitle: 'Estabelecimento',
        component: Establishment
    },
    {
        path: '/session',
        breadcrumbTitle: 'Configuração de Sessão',
        component: ConfigSession
    }
];

export default {component: PrivateRoute, routes};
