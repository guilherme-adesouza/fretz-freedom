import React from "react";
import { yup } from "components/form/customYup";
import { Form, Formik } from "formik";
import Field from "components/form/Field";
import FormButton from "components/form/FormButton";
import Button from "components/commons/Button";
import Icon from "components/commons/Icon";
import Api from "service/Api";
import UiMsg from "components/commons/UiMsg";
import "components/commons/Breadcrumb.css";

const ItemGroupSchema = yup(yup => {
    return yup.object().shape({
        descricao: yup.string().required().default('')
    })
});

const ItemGroupsForm = () => {

    // Ação do botão aqui
    const createItemGroup = async (values, actions) => {

    };

    return (
        <div className="valign-wrapper row">
            <div id="form-box" className="col card s12 pull-s1 m6 pull-m3 14 pull-14">
                <Formik
                    initialValues={ItemGroupSchema.default()}
                    onSubmit={createItemGroup}>
                    <Form className="col s12">
                        <div className="card-content">
                            <span className="card-title center-align">
                                Cadastro de Grupos de Itens</span>
                            <div className="row">
                                <div className="input-field col s12">
                                    <Field title="Descrição" type="text" name="descricao" />
                                </div>
                                <Field title="itemGroupId" type="hidden" name="itemGroupId" />
                            </div>
                            <div className="card-action center-align">
                                <FormButton type="submit">Salvar</FormButton>
                                <FormButton type="reset">Limpar</FormButton>
                            </div>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
};

// Necessário preencher a tabela com dados vindos do banco e configurar ações dos botões Editar/Excluir
const ItemGroupsTable = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <table className="striped teal lighten-2 left-aling">
                        <thead>
                            <tr>
                                <th>Descrição</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Teste</td>
                                <td>
                                    <Button onClick="#">
                                        <Icon icon="edit" size="medium"></Icon>
                                    </Button>
                                    <Button onClick="#">
                                        <Icon icon="cancel" size="medium"></Icon>
                                    </Button>
                                </td>
                            </tr>      
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

const ItemGroups = (props) => {
    return (
        <React.Fragment>
            <nav className="breadcrumb-nav">
                <div className="nav-wrapper">
                    <div className="col s12">
                        <a href="/home" className="breadcrumb">Home</a>
                        <a href="/itemgroups" className="breadcrumb">Grupos de Itens</a>
                    </div>
                </div>
            </nav>
            <div>
                <ItemGroupsForm />
            </div>
            <div>
                <ItemGroupsTable />
            </div>
        </React.Fragment>
    )
};

export default ItemGroups;
