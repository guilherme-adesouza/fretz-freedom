import React, {useState} from "react";
import {Form, Formik} from "formik";
import {Redirect} from "react-router-dom";
import * as yup from "yup";

import Api from "../service/Api";
import Field from "./form/Field";
import FormButton from "./form/FormButton";


const LoginSchema = yup.object().shape({
    email: yup.string().required().default(''),
    password: yup.string().required().default(''),
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
            alert('Usuário ou senha incorretos');
        }
    };

    let from = location.state ? location.state.from || { pathname: "/home" } : { pathname: "/home" };

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
        <Formik
            validationSchema={LoginSchema}
            initialValues={LoginSchema.default()}
            onSubmit={attemptLogin}>
            <Form>
                <div className="Login Form">
                    <Field title="E-mail" type="text" name="email"/>
                    <Field title="Senha" type="password" name="password"/>
                    <FormButton type="submit">Login</FormButton>
                </div>
            </Form>
        </Formik>
    )
};

export default Login;
