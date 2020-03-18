import React from "react";

const Icon = ({
                  icon = '',
                  size = 'medium',
                  className = '',
                  ...props
              }) => {
    return (
        <i className={`material-icons ${size} ${className}`}>{icon}</i>
    )
};

export default Icon;
