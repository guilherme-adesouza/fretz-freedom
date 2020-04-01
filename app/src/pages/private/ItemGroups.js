import React from "react";
import { yup } from "components/form/customYup";
import { Form, Formik } from "formik";
import Field from "components/form/Field";
import FormButton from "components/form/FormButton";
import Button from "../../components/commons/Button";
import Icon from "../../components/commons/Icon";
import Api from "service/Api";
import UiMsg from "components/commons/UiMsg";
import "../../components/commons/Breadcrumb.css";
import "../../components/form/Form.css";

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
        <div class="valign-wrapper row">
            <div id="form-box" class="col card hoverable s12 pull-s1 m6 pull-m3 14 pull-14">
                <Formik
                    initialValues={ItemGroupSchema.default()}
                    onSubmit={createItemGroup}>
                    <Form className="col s12">
                        <div class="card-content">
                            <span class="card-title center-align">
                                Cadastro de Grupos de Itens</span>
                            <div class="row">
                                <div class="input-field col s12">
                                    <Field title="Descrição" type="text" name="descricao" />
                                </div>
                                <Field title="itemGroupId" type="hidden" name="itemGroupId" />
                            </div>
                            <div class="card-action center-align">
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
        <div class="container">
            <div class="row">
                <div class="col s12">
                    <table class="striped teal lighten-2 left-aling">
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
            <nav class="breadcrumb-nav">
                <div class="nav-wrapper">
                    <div class="col s12">
                        <a href="/home" class="breadcrumb">Home</a>
                        <a href="/itemgroups" class="breadcrumb">Grupos de Itens</a>
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
