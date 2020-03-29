import React from "react";
import "../css/Button.css";

const Button = ({
                    label = '',
                    className = '',
                    children = null,
                    ...props
                }) => {
    return (
        <button className={`btn waves-effect waves-light ${className}`} {...props}>
            {label}
            {children}
        </button>
    )
};

export default Button;
