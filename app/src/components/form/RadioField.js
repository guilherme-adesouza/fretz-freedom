import React from 'react';

const RadioField = ({
                       type = "text",
                       title = null,
                       placeholder = '',
                       className = '',
                       description = '',
                       field,
                       form,
                       children,
                       ...props
                   }) => {

    return (
        <label>
            <input className={`with-gap ${className}`}
                    type="radio"
                    {...field}
                    {...props}/>
            {!!description && <span htmlFor={props.id}>{description}</span>}
        </label>
    );
};

export default RadioField;
