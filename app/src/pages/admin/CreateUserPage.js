import React from "react";
import {yup} from "components/form/customYup";
import Form from "components/form/Form";
import Field from "components/form/Field";
import FormButton from "components/form/FormButton";
import Api from "service/Api";
import UiMsg from "components/commons/UiMsg";
import "components/commons/Breadcrumb.css";

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
        <div className="valign-wrapper row">
            <Form initialValues={UserSchema.default()}
                  onSubmit={createUser}>
                <div className="card-content">
                    <span className="card-title center-align">Cadastro de Usuários</span>
                    <div className="row">
                        <div className="input-field col s12">
                            <Field title="Nome" type="text" name="nome"/>
                        </div>
                        <div className="input-field col s12">
                            <Field title="E-mail" type="text" name="email"/>
                        </div>
                        <div className="input-field col s12">
                            <Field title="Senha" type="password" name="senha"/>
                        </div>
                    </div>
                    <div className="card-action center-align">
                        <FormButton type="submit">Criar Usuário</FormButton>
                    </div>
                </div>
            </Form>
        </div>         
    );
};

const CreateUserPage = (props) => {
    return (
        <React.Fragment>
            <nav className="breadcrumb-nav">
                <div className="nav-wrapper">
                    <div className="col s12">
                        <a href="/home" className="breadcrumb">Home</a>
                        <a href="/admin/user/create" className="breadcrumb">Criar Usuários</a>
                    </div>
                </div>
            </nav>
            <div>
                <UserForm />
            </div>
        </React.Fragment>
    )
};

export default CreateUserPage;
