import "pages/public/NotFoundPage.css";
import React from "react";
import {Link, Redirect} from "react-router-dom";
import logo from "imgs/logo.png";

const NotFoundPage = ({location}) => {
    if (location.pathname === '/') {
        return (
            <Redirect to={{pathname: '/login'}}/>
        )
    }
    return (
        <div className="NotFoundPage">
            <div>
                <div>
                    <img src={logo} alt="logo" width="100%"/>
                    <p>Não encontramos nada para<code>{location.pathname}</code></p>
                    <p><Link to="/home">Clique aqui</Link> para voltar para a página inicial.</p>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage;