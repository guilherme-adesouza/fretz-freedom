import "components/NavBar.css";
import React from "react";
import logo from "../imgs/logomini.png";
import SideBar from "components/SideBar";

const NavBarContainer = (props) => {
    const navItems = [
        { href: '/admin/user/create', title: 'Criar Usuários' },
    ];
    return <NavBar items={navItems}/>
};

const NavBar = ({
                    items = [],
                }) => {
    return (
        <nav className="main-nav">
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">
                    <img src={logo} alt="Logo" width="120" height="60"/>
                </a>
                <SideBar />
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    {items.map((item, idx) => {
                        return (
                            <li key={idx}>
                                <a href={item.href}>{item.title}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
};

export default NavBarContainer;
