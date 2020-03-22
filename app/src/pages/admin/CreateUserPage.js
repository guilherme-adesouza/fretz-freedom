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
        <Formik
            initialValues={UserSchema.default()}
            onSubmit={createUser}>
            <Form className="col s12">
                <Field title="Nome" type="text" name="nome"/>
                <Field title="E-mail" type="text" name="email"/>
                <Field title="Senha" type="password" name="senha"/>
                <FormButton type="submit">Criar Usuário</FormButton>
            </Form>
        </Formik>
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
