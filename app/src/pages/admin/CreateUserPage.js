import React from "react";
import {yup} from "components/form/customYup";
import {Form, Formik} from "formik";
import Field from "components/form/Field";
import FormButton from "components/form/FormButton";
import Api from "service/Api";
import UiMsg from "components/commons/UiMsg";

const UserSchema = yup(yup => {
    return yup.object().shape({
        nome: yup.string().required().default(''),
        email: yup.string().required().default(''),
        senha: yup.string().required().default(''),
    })
});

const UserForm = () => {

    const createUser = async (values, actions) => {
        try {
            const user = await Api.Fretz.User.create(values);
            UiMsg.success({message: `Usuário ${values.nome} criado com sucesso!`});
        } catch (e) {
            actions.setSubmitting(false);
            UiMsg.error({message: 'Falhar ao criar usuário', error: e});
        }
    };

    return (
        <div class="valign-wrapper row login-box">
            <div id="form-box" class="col card hoverable s12 pull-s1 m6 pull-m3 14 pull-14">
                <Formik
                initialValues={UserSchema.default()}
                onSubmit={createUser}>
                    <Form className="col s12">
                        <div class="card-content">
                            <span class="card-title center-align">
                                Cadastro de Usuários</span>
                            <div class="row">
                                <div class="input-field col s12">
                                    <Field title="Nome" type="text" name="nome"/>
                                </div>
                                <div class="input-field col s12">
                                    <Field title="E-mail" type="text" name="email"/>
                                </div>
                                <div class="input-field col s12">
                                    <Field title="Senha" type="password" name="senha"/>
                                </div>
                            </div>
                            <div class="card-action center-align">
                                <FormButton type="submit">Criar Usuário</FormButton>
                            </div>    
                        </div>
                    </Form>
                </Formik>            
            </div>
        </div>         
    );
};

const CreateUserPage = (props) => {
    return (
        <div>
            CRIAÇÃO DE USUÁRIOS
            <UserForm/>
        </div>
    )
};

export default CreateUserPage;
