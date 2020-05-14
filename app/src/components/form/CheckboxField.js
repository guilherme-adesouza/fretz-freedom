import React from 'react';

const CheckboxField = ({
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
            <input className={`filled-in ${className}`}
                    type="checkbox"
                    {...field}
                    {...props}/>
            {!!description && <span htmlFor={props.id}>{description}</span>}
        </label>
    );
};

export default CheckboxField;
