import "pages/public/LoginPage.css"
import logo from "imgs/logo.png";
import React from "react";

import Login from "components/Login";

const LoginPage = (props) => {
    return (
        <div className="LoginPage row">
            <header className="theme-bgc header col s6 center">
                <div className="img-logo-wrapper">
                    <img src={logo} alt="logo" width="100%"/>
                    <h1 style={{margin: "1rem", color: "#423b3d"}}>FRETZ & FREEDOM</h1>
                    <h4 style={{fontWeight: "bold", letterSpacing: "2.4px"}}>CARGO OPTIMIZER</h4>
                    <a href="/aboutus">Clique aqui para conferir informações dos autores!</a>
                </div>
            </header>
            <div className="col s6 container">
                <Login {...props}/>
            </div>
        </div>
    )
};

export default LoginPage;
