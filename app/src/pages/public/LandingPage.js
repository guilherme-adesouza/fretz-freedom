import React from "react";
import {Link} from "react-router-dom";

const LandingPage = () => {
    return (
        <div>
            <header className="header center">
                <h3>FRETZ & FREEDOM</h3>
            </header>
            <div className="content">
                <Link to="/home">Link para Home do usuário (vai voltar aqui se não tiver autenticado)</Link>
            </div>
        </div>
    )
};

export default LandingPage;
