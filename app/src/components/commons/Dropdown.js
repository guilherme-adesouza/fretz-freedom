import React from "react";
import Icon from "./Icon";


const DropdownItem = ({icon, name, ...props}) => {
    return (
        <li {...props}>
            <a href="#!">
                {!!icon && <Icon icon={icon}/>} {name}
            </a>
        </li>
    )
}

const Dropdown = ({ 
                            dropdownId, 
                            list,
                            children,
                            className,
                            ...props
                        }) => {
    return (
        <ul id={dropdownId} className={`dropdown-content ${className}`} {...props}>
            {children}
            {!!list && list.map((item, idx) => <DropdownItem key={idx} {...item}/>)}
        </ul>
    )
}

export default Dropdown;