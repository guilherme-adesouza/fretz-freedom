import "pages/public/LoginPage.css"
import React from "react";
import Login from "components/Login";

const LoginPage = (props) => {
    return (
        <div className="LoginPage row">
            <header className="theme-bgc header col s6 center">
                <h3 style={{margin: 'auto'}}>FRETZ & FREEDOM</h3>
            </header>
            <div className="col s6 container">
                <Login {...props}/>
            </div>
        </div>
    )
};

export default LoginPage;
