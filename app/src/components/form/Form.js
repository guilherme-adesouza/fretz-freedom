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
        <div id={id} className={`col card s10 pull-s1 ${className}`}>
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
