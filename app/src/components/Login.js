import React, {useState} from "react";
import {Form, Formik} from "formik";
import {Redirect} from "react-router-dom";
import {yup} from "components/form/customYup";
import M from "materialize-css"

import Api from "service/Api";
import Field from "components/form/Field";
import FormButton from "components/form/FormButton";

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
            M.toast({html: "Usuário ou senha incorreto(s)!", classes: 'rounded', displayLength: 1500})
        }
    };

    let from = location.state ? location.state.from || { pathname: "/home" } : { pathname: "/home" };

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
        <div class="valign-wrapper row login-box">
            <div id="form-box" class="col card hoverable s10 pull-s1 m6 pull-m3 14 pull-14">
                <Formik
                    initialValues={LoginSchema.default()}
                    onSubmit={attemptLogin}>
                    <Form className="col s12">
                        <div class="card-content">
                            <span class="card-title center-align">
                                Fretz & Freedom - Login</span>
                            <div class="row">
                                <div class="input-field col s12">
                                    <Field title="E-mail" type="text" name="email"/>
                                </div>
                                <div class="input-field col s12">
                                    <Field title="Senha" type="password" name="password"/>
                                </div>
                            </div>
                            <div class="card-action center-align">
                                <FormButton type="submit">Login</FormButton>
                            </div> 
                        </div>
                    </Form>   
                </Formik>
            </div>
        </div>
    )
};

export default Login;
