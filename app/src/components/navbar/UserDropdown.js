import "components/navbar/UserDropdown.css";
import React from "react";

import Storage from "service/Storage";
import DefaultUser from "../../imgs/default_user.png";
import Dropdown from "components/commons/Dropdown";
import DropdownTrigger from "components/commons/DropdownTrigger";
import Api from "service/Api";

const UserDropdown = (props) => {
    const user = Storage.getUser();

    const logout = async () => {
        await Api.Fretz.User.logout();
        window.location = '/';
    }

    const editProfile = async () => {
        alert('editProfile ainda não implementado');
    }

    if(!user) return null;
    return (
        <>
            <DropdownTrigger className="UserDropdown flex-center-btw hover-transition" dropdownId="user-dropdown">
                <span className="username">{user.nome}</span>
                <img className="user-photo circle" src={user.img || DefaultUser}/>
            </DropdownTrigger>
            <Dropdown dropdownId="user-dropdown" 
                      list={[
                                // {name: "Editar Perfil", onClick: () => editProfile()}, 
                                {name: "Sair", onClick: () => logout()}
                            ]}/>
        </>
    )
}

export default UserDropdown;