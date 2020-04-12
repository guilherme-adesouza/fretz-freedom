import "pages/public/LoginPage.css"
import React from "react";
import Login from "components/Login";
import logo from "../../imgs/logofull.png";

const LoginPage = (props) => {
    return (
        <div className="LoginPage row">
            <header className="theme-bgc header col s6 center">
                <img src={logo} alt="logo" width="110%"></img>
            </header>
            <div className="col s6 container">
                <Login {...props}/>
            </div>
        </div>
    )
};

export default LoginPage;
