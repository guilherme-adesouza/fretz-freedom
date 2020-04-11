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
            <textarea placeholder={holder} {...field} {...props}/>
        );
    }
    return (
        <input className="validate" type={type} {...field} />
);
};

export default TextField;
