import React from 'react';

const FormButton = ({
                      type = 'submit',
                      className = '',
                      name = '',
                      children,
                      ...props
                  }) => {
    return (
        <button className={`Button ${className}`} type={type} name={name} {...props}>
            {children}
        </button>
    );
};

export default FormButton;
