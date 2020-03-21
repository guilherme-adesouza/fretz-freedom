import React from 'react';
import Button from "../commons/Button";

const FormButton = ({
                      type = 'submit',
                      className = '',
                      name = '',
                      children,
                      ...props
                  }) => {
    return (
        <Button className={`Button ${className}`} type={type} name={name} {...props} children={children} />
    );
};

export default FormButton;
