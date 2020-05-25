import React, {useRef, useEffect} from "react";
import M from "materialize-css";


const DropdownTrigger = ({ 
                            dropdownId = 'random_id', 
                            children,
                            className = '',
                            ...props
                        }) => {

    const dropdown = useRef(null);
    useEffect(() => {
        M.Dropdown.init(dropdown.current);
        return () => {
            M.Dropdown.getInstance(dropdown.current).destroy();
        }
    }, []);

    return (
        <a ref={dropdown} href="#" data-target={dropdownId} className={`dropdown-trigger ${className}`}{...props}>
            {children}
        </a>
    )
}

export default DropdownTrigger;