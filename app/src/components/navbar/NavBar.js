import "components/navbar/NavBar.css";
import React from "react";
import SideBar from "components/navbar/SideBar";
import UserDropdown from "components/navbar/UserDropdown";

const NavBarContainer = (props) => {
    return <NavBar/>
};

const NavBar = ({
                    items = [],
                }) => {
    return (
        <nav className="main-nav">
            <div className="nav-wrapper">
                <SideBar />
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <UserDropdown />
                </ul>
            </div>
        </nav>
    )
};

export default NavBarContainer;
