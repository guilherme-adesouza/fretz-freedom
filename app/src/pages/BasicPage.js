import React from "react";
import NavBar from "components/NavBar";
import Footer from "components/Footer";
import Breadcrumb from "components/commons/Breadcrumb";

const BasicPage = (props) => {
    return (
        <div>
            <header>
                <NavBar {...props}/>
            </header>
            <main>
                <Breadcrumb />
                {props.children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
};

export default BasicPage;
