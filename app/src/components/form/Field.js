import React, { useEffect } from 'react';
import M from "materialize-css";
import {Field, ErrorMessage} from 'formik';

import TextField from 'components/form/TextField';
import SelectField from 'components/form/SelectField';
import MultiSelect from 'components/form/MultiSelect';

const COMPONENTS = {
    "text": TextField,
    "textarea": TextField,
    "password": TextField,
    "select": SelectField,
    "select multiple": MultiSelect
};

const InputWrapper = ({
                          id = '',
                          title = '',
                          field = {},
                          ...props
                      }) => {
    const _id = id || `form_field_${field.name}`;
    const Component = !!COMPONENTS[props.type] ? COMPONENTS[props.type] : TextField;

    useEffect(() => {
        M.updateTextFields();       
    }, [field.value]);

    return (
        <div className="input-field">
            <Component id={_id} field={field} title={title} {...props}/>
            { props.type !== 'hidden' && <label htmlFor={id}>{title}</label> }
        </div>
    )
};

const MyField = ({
                     className = '',
                     name= '',
                     type = 'text',
                     title = null,
                     required = true,
                     ...props
                 }) => {
    return (
        <div className={`Field ${className}`}>
            <Field {...props}
                   title={title}
                   required={required}
                   name={name}
                   type={type}
                   component={InputWrapper}>
            </Field>
            <ErrorMessage component="span" className="Error" name={name}/>
        </div>
    )
};

export default MyField;
