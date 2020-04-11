import React from "react";
import {Form, Formik} from "formik";

const FormWrapper = ({
                          id,
                          className = '',
                          initialValues = {},
                          onSubmit,
                          children,
                          ...props
                      }) => {
    return (
        <div id={id} style={{margin: '20px auto 0'}} className={`container row card ${className}`}>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}>
                <Form className="col s12">
                    {children}
                </Form>
            </Formik>
        </div>
    )
};

export default FormWrapper;
