import "components/navbar/SideBar.css";
import React, {useEffect, useRef} from "react";
import {Link} from "react-router-dom";
import M from "materialize-css";

import Storage from "service/Storage";
import Icon from "components/commons/Icon";
import logo from "imgs/logo.png";


const CRUD_SIDE_LINKS = {
    description: "Cadastros",
    links: {
        "CLIENT": {
            label: "Clientes",
            link: "/client"
        },
        "REGION": {
            label: "Regiões",
            link: "/region"
        },
        "VEHICLES": {
            label: "Veículos",
            link: "/vehicles"
        },
        "ITEMS": {
            label: "Itens",
            link: "/items"
        },
        "GROUP_ITEMS": {
            label: "Grupos de Itens",
            link: "/item/groups"
        },
    }
};

const OPERATION_SIDE_LINKS = {
    description: "Operação",
    links: {
        "MAP": {
            label: "Mapa",
            link: "/map"
        },
        "ORDER": {
            label: "Pedidos",
            link: "/order"
        },
        "TRAVEL": {
            label: "Viagens",
            link: "/travel"
        },
    }
};

const PARAMETERS_SIDE_LINKS = {
    description: "Parâmetros",
    links: {
        "ESTABLISHMENT": {
            label: "Estabelecimento",
            link: "/establishment"
        },
    }
};

const ADMIN_SIDE_LINKS = {
    description: "Administrador",
    links: {
        "CREATE_USERS": {
            label: "Criar Usuários",
            link: "/admin/user/create"
        },
        "INTERNAL_DATA": {
            label: "Dados da aplicação",
            link: "/admin/data"
        },
    },
};


const SIDE_LINKS = [
    {links: OPERATION_SIDE_LINKS},
    {links: CRUD_SIDE_LINKS},
    {links: PARAMETERS_SIDE_LINKS},
    {links: ADMIN_SIDE_LINKS, admin: true}
];

const SideBar = (props) => {
    const sidenav = useRef(null);

    useEffect(() => {
        const ref = sidenav.current;
        M.Sidenav.init(ref);
        return () => {
            M.Sidenav.getInstance(ref).destroy();
        }
    }, []);

    const renderLink = (idx, sideLink) => {
        return (
            <li key={idx}>
                <Link to={sideLink.link}>
                    {sideLink.label}
                </Link>
            </li>
        )
    };

    return (
        <>
            <a href="#" data-target="slide-out" className="sidenav-trigger">
                <Icon icon="menu" size="small"/>
            </a>
            <ul id="slide-out" className="sidenav" ref={sidenav}>
                <li className="user-view">
                    <div className="flex-center-btw">
                         <div className="background theme-bgc"/>
                        <img src={logo} alt="logo" width="40%"/>
                        <span>FRETZ & FREEDOM</span>
                    </div>
                </li>
                {SIDE_LINKS.map((sl, idx) => {
                    const user = Storage.getUser();
                    if (sl.admin && (!user || !user.admin)) return null;
                    const sideNav = sl.links;
                    return (
                        <div key={idx}>
                            {idx !== 0 && <li><div className="divider"/></li>}
                            <li><a className="subheader">{sideNav.description}</a></li>
                            {Object.values(sideNav.links).map((sideLink, idx) => {
                                return renderLink(idx, sideLink)
                            })}
                        </div>
                    )
                })}
            </ul>
        </>
    )
};

export default SideBar;
