import React from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";

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
            <footer>
                <Footer />
            </footer>
        </div>
    )
};

export default BasicPage;
