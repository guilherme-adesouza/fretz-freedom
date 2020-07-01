import React from 'react';

const TextField = ({
                       type = "text",
                       title = null,
                       placeholder = '',
                       className = '',
                       field,
                       form,
                       children,
                       ...props
                   }) => {
    const holder = placeholder || title;
    if (type === "textarea") {
        return (
            <textarea className={`validate ${className}`}  placeholder={holder} {...field} {...props}/>
        );
    }
    return (
        <input className={`validate ${className}`} type={type} {...field} {...props}/>
    );
};

export default TextField;
