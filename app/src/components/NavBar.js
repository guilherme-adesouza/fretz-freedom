import React from "react";
import logo from '../imgs/logomini.png'

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
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">
                    <img src={logo} alt="Logo" width="150" height="60"></img>
                </a>
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
