import React, { useState, useEffect } from "react";
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
        estabelecimento_id: yup.number().required('Campo obrigatório!').default(0).typeError('Selecione uma opção!')
    })
});

const UserForm = ({updateData, establishments, formRef}) => {

    const createUser = async (values, actions) => {
        try {
            const user = await Api.Fretz.User.create(values);
            UiMsg.success({message: `Usuário ${values.nome} criado com sucesso!`});
        } catch (e) {
            actions.setSubmitting(false);
            UiMsg.error({message: 'Falhar ao criar usuário', error: e});
        }

        actions.resetForm();
        updateData();
    };

    return (
        <div className="valign-wrapper row">
            <Form 
                innerRef={formRef}
                initialValues={UserSchema.default()}
                  onSubmit={createUser}>
                <div className="card-content">
                    <span className="card-title center-align">Cadastro de Usuários</span>
                    <div className="row">
                        <div className="col s12">
                            <Field title="Nome" type="text" name="nome"/>
                        </div>
                        <div className="col s12">
                            <Field title="E-mail" type="text" name="email"/>
                        </div>
                        <div className="col s12">
                            <Field title="Senha" type="password" name="senha"/>
                        </div>
                        <div className="col s4">
                            <Field title="Estabelecimento"
                                    options={establishments}
                                    keys={{value: "id", label: "nome"}}
                                    type="select"
                                    name="estabelecimento_id" />
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
    const formRef = React.useRef();

    const [establishments, setEstablishments] = useState([]);

    const fetchEstablishments = async () => {
        const _establishments = await Api.Fretz.Establishment.getAll();
        setEstablishments(_establishments);
    }

    useEffect(() => {
        fetchEstablishments();
    }, []);
    
    return (
        <React.Fragment>
            <div>
                <UserForm updateData={fetchEstablishments} 
                           establishments={establishments}
                           formRef={formRef}/>
            </div>
        </React.Fragment>
    )
};

export default CreateUserPage;
