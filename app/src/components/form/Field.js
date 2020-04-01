import React from 'react';
import {Field, ErrorMessage} from 'formik';

import TextField from './TextField';
import SelectField from './SelectField';
import DateField from './DateField';

const COMPONENTS = {
    "text": TextField,
    "textarea": TextField,
    "password": TextField,
    "select": SelectField,
    "date": DateField,
};

const MyField = ({
                     className = '',
                     name= '',
                     type = 'text',
                     title = null,
                     required = true,
                     ...props
                 }) => {
    const component = !!COMPONENTS[type] ? COMPONENTS[type] : undefined;
    return (
        <div className={`Field ${className}`}>
            <Field {...props}
                   title={title}
                   required={required}
                   name={name}
                   type={type}
                   component={component}/>
            <ErrorMessage component="span" className="Error" name={name}/>
        </div>
    )
};

export default MyField;
