import React from 'react';

const TextField = ({
                       type = "text",
                       title = null,
                       placeholder = '',
                       id = '_form_id',
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
        <div className="input-field col s12">
            <input id={id} className="validate" type={type} {...field} {...props}/>
            <label htmlFor={id}>{title}</label>
        </div>
);
};

export default TextField;
