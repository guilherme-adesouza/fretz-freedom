import React, {useEffect, useRef, useState} from "react";
import M from "materialize-css";
import Icon from "components/commons/Icon";


const SideBar = (props) => {
    const sidenav = useRef(null);

    useEffect(() => {
        M.Sidenav.init(sidenav.current);
    }, []);

    return (
        <>
            <a href="#" data-target="slide-out" className="sidenav-trigger">
                <Icon icon="menu" size="small"/>
            </a>
            <ul id="slide-out" className="sidenav" ref={sidenav}>
                <li>
                    <div className="user-view">
                        <div className="background">
                            <img src="images/office.jpg"/>
                        </div>
                        <a href="#user"><img className="circle" src="images/yuna.jpg"/></a>
                        <a href="#name"><span className="white-text name">John Doe</span></a>
                        <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
                    </div>
                </li>
                <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
                <li><a href="#!">Second Link</a></li>
                <li><a href="/itemgroups">Grupos de Itens</a></li>
                <li>
                    <div className="divider"></div>
                </li>
                <li><a className="subheader">Subheader</a></li>
                <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
            </ul>
        </>
    )
};

export default SideBar;
