import React from "react";
import NavBar from "components/NavBar";
import Footer from "components/Footer";

const BasicPage = (props) => {
    return (
        <div>
            <header>
                <NavBar {...props}/>
            </header>
            <main>
                {props.children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
};

export default BasicPage;
