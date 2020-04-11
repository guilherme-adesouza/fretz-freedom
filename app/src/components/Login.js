import React, {useState} from "react";
import {Redirect} from "react-router-dom";

import Api from "service/Api";
import Form from "components/form/Form";
import {yup} from "components/form/customYup";
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
            UiMsg.error({message: "Usuário ou senha incorreto(s)!"})
        }
    };

    let from = location.state ? location.state.from || { pathname: "/home" } : { pathname: "/home" };

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
        <div style={{margin: 'auto'}} className="valign-wrapper row login-box">
            <Form id="login-form"
                  initialValues={LoginSchema.default()}
                  onSubmit={attemptLogin}>
                <div className="card-content">
                    <span className="card-title center-align">Fretz & Freedom - Login</span>
                    <div className="row">
                        <div className="col s12">
                            <Field title="E-mail"
                                   type="text"
                                   name="email"/>
                        </div>
                        <div className="col s12">
                            <Field title="Senha"
                                   type="password"
                                   name="password"/>
                        </div>
                    </div>
                    <div className="card-action center-align">
                        <FormButton type="submit">Login</FormButton>
                    </div>
                </div>
            </Form>
        </div>
    )
};

export default Login;
