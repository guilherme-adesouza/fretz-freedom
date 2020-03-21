import React from "react";
import {Link} from "react-router-dom";
import Login from "components/Login";

const LandingPage = (props) => {
    return (
        <div>
            <header className="header center">
                <h3>FRETZ & FREEDOM</h3>
            </header>
            <div className="container">
                <Link to="/home">Link para Home do usuário (vai voltar aqui se não tiver autenticado)</Link>
                <Login {...props}/>
            </div>
        </div>
    )
};

export default LandingPage;
