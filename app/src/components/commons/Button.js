import React from "react";


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
