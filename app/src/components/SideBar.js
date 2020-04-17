import "components/SideBar.css";
import React, {useEffect, useRef} from "react";
import {Link} from "react-router-dom";
import M from "materialize-css";

import Icon from "components/commons/Icon";


const SIDE_LINKS = {
    "GROUP_ITEMS": {
        label: "Grupos de Itens",
        link: "/item/groups"
    },
    "ITEMS": {
        label: "Itens",
        link: "/items"
    },
    "VEHICLES": {
        label: "Veículos",
        link: "/vehicles"
    },
    "REGION": {
        label: "Regiões",
        link: "/region"
    },
    "CLIENT": {
        label: "Clientes",
        link: "/client"
    },
    "ORDER": {
        label: "Pedidos",
        link: "/order"
    }
};

const SideBar = (props) => {
    const sidenav = useRef(null);

    useEffect(() => {
        M.Sidenav.init(sidenav.current);
        return () => {
            M.Sidenav.getInstance(sidenav.current).destroy();
        }
    }, []);

    return (
        <>
            <a href="#" data-target="slide-out" className="sidenav-trigger">
                <Icon icon="menu" size="small"/>
            </a>
            <ul id="slide-out" className="sidenav" ref={sidenav}>
                <li>
                    <div className="user-view">
                        <div className="background" style={{backgroundColor: "var(--main-bg-color)"}}/>
                        <a href="#name"><span className="white-text name">John Doe</span></a>
                        <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
                    </div>
                </li>
                {Object.values(SIDE_LINKS).map((sideLink, idx) => {
                    return (
                        <li key={idx}>
                            <Link to={sideLink.link}>
                                {sideLink.label}
                            </Link>
                        </li>
                    )
                })}
                <li>
                    <div className="divider"></div>
                </li>
            </ul>
        </>
    )
};

export default SideBar;
