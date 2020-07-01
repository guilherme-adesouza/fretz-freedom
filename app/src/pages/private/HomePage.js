import React from "react";
import {Link} from "react-router-dom";
import Icon from "components/commons/Icon";


const HomePage = (props) => {

    const item = (link, name, icon) => {
        return (
            <Link to={link}>
                <div className="col s6 flex-center" style={{height: '50%', border: '1px solid'}}>
                    <Icon icon={icon} style={{padding: '0 20px'}}/>
                    <span>{name}</span>
                </div>
            </Link>
        )
    }
    return (
        <div className="row" style={{height: "100%"}}>
            {item('/order', 'PEDIDOS', 'assignment')}
            {item('/travel', 'VIAGEMS', 'hourglass_top')}
            {item('/client', 'CLIENTES', 'face')}
            {item('/vehicle', 'VEÍCULOS', 'local_shipping')}
        </div>
    )
};

export default HomePage;
