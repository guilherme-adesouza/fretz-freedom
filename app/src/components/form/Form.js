import React from "react";
import FormButton from "components/form/FormButton";
import {Form, Formik} from "formik";

const FormWrapper = ({
                          id,
                          className = '',
                          style = {},
                          initialValues = {},
                          innerRef = null,
                          defaultActionButtons = false,
                          onSubmit,
                          children,
                          ...props
                      }) => {
    return (
        <div id={id} style={{margin: '20px auto 0', ...style}} className={`container row card ${className}`}>
            <Formik
                innerRef={innerRef}
                initialValues={initialValues}
                onSubmit={onSubmit}
                {...props}>
                <Form className="col s12">
                    <div className="card-content">
                        {children}
                        {defaultActionButtons && 
                        <div className="card-action right-align">
                            <FormButton type="submit">Salvar</FormButton>
                            <FormButton type="reset">Limpar</FormButton>
                        </div>
                        }
                    </div>
                </Form>
            </Formik>
        </div>
    )
};

export default FormWrapper;
