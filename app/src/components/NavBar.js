import React from "react";

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
                <a href="#" className="brand-logo">Logo</a>
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
