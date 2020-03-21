import React, {useState} from "react";
import {Form, Formik} from "formik";
import {Redirect} from "react-router-dom";
import {yup} from "components/form/customYup";

import Api from "service/Api";
import Field from "components/form/Field";
import FormButton from "components/form/FormButton";
import UiMsg from "components/commons/UiMsg";


const LoginSchema = yup(yup => {
    return yup.object().shape({
        email: yup.string().required().default(''),
        password: yup.string().required().default(''),
    });
});

const Login = ({
                   location,
                   ...props
               }) => {
    const [redirectToReferrer, setRedirectToReferrer] = useState(false);

    const attemptLogin = async (values, actions) => {
        try {
            const user = await Api.Fretz.User.login(values);
            setRedirectToReferrer(true);
        } catch (e) {
            actions.setSubmitting(false);
            UiMsg.error({message: 'Usuário ou senha incorretos', error: e});
        }
    };

    let from = location.state ? location.state.from || { pathname: "/home" } : { pathname: "/home" };

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
        <Formik
            validationSchema={LoginSchema}
            initialValues={LoginSchema.default()}
            onSubmit={attemptLogin}>
            <Form className="col s12">
                <Field title="E-mail" type="text" name="email"/>
                <Field title="Senha" type="password" name="password"/>
                <FormButton type="submit">Login</FormButton>
            </Form>
        </Formik>
    )
};

export default Login;
