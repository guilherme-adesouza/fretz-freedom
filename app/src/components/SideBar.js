import "components/SideBar.css";
import React, {useEffect, useRef} from "react";
import {Link} from "react-router-dom";
import M from "materialize-css";

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
        }
    }
};

const SIDE_LINKS = [
    OPERATION_SIDE_LINKS,
    CRUD_SIDE_LINKS,
    PARAMETERS_SIDE_LINKS
];

const SideBar = (props) => {
    const sidenav = useRef(null);

    useEffect(() => {
        M.Sidenav.init(sidenav.current);
        return () => {
            M.Sidenav.getInstance(sidenav.current).destroy();
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
                        <img src={logo} alt="logo" width="40%"/>
                        <span>FRETZ & FREEDOM</span>
                    </div>
                    <div>
                        <div className="background theme-bgc"/>
                        <span className="white-text name">John Doe</span>
                        <span className="white-text email">jdandturk@gmail.com</span>
                    </div>
                </li>
                {SIDE_LINKS.map((sideNav, idx) => {
                    return (
                        <div>
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
