import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

const BasicPage = (props) => {
    return (
        <div>
            <header>
                <NavBar {...props}/>
            </header>
            <SideBar />
            <main className="container">
                {props.children}
            </main>
        </div>
    )
};

export default BasicPage;
