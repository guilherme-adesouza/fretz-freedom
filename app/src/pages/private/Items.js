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

const ItemSchema = yup(yup => {
    return yup.object().shape({
        descricao: yup.string().required().default('')
    })
});

const ItemsForm = () => {

    // Ação do botão aqui
    const createItem = async (values, actions) => {

    };

    return (
        <div class="valign-wrapper row">
            <div id="form-box" class="col card hoverable s12 pull-s1 m6 pull-m3 14 pull-14">
                <Formik
                    initialValues={ItemSchema.default()}
                    onSubmit={createItem}>
                    <Form className="col s12">
                        <div class="card-content">
                            <span class="card-title center-align">
                                Cadastro de Itens</span>
                            <div class="row">
                                <div class="input-field col s12">
                                    <Field title="Descrição" type="text" name="descricao" />
                                </div>
                                <div class="input-field col s4">
                                    <Field title="Unid. Medida" type="text" name="unidade_medida" />
                                </div>
                                <div class="input-field col s4">
                                    <Field title="Grupo do Item" type="text" name="grupo_item_id" />
                                </div>
                                <div class="input-field col s4">
                                    <Field title="Valor de Custo" placeholder="R$ " type="text" name="valor_custo" />
                                </div>
                                <div class="input-field col s4">
                                    <Field title="Valor de Venda" placeholder="R$ " type="text" name="valor_venda" />
                                </div>
                                <div class="input-field col s4">
                                    <Field title="Volume" type="text" name="volume" />
                                </div>
                                <div class="input-field col s4">
                                    <Field title="Peso" type="text" name="peso" />
                                </div>
                                <Field title="itemId" type="hidden" name="itemId" />
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
const ItemsTable = () => {
    return (
        <div class="container">
            <div class="row">
                <div class="col s12">
                    <table class="striped teal lighten-2 left-aling">
                        <thead>
                            <tr>
                                <th>Descrição</th>
                                <th>U.M.</th>
                                <th>Grupo</th>
                                <th>Volume</th>
                                <th>Peso</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Teste</td>
                                <td>Kg</td>
                                <td>Grupo 1</td>
                                <td>n/c</td>
                                <td>100</td>
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

const Items = (props) => {
    return (
        <React.Fragment>
            <nav class="breadcrumb-nav">
                <div class="nav-wrapper">
                    <div class="col s12">
                        <a href="/home" class="breadcrumb">Home</a>
                        <a href="/itemgroups" class="breadcrumb">Itens</a>
                    </div>
                </div>
            </nav>
            <div>
                <ItemsForm />
            </div>
            <div>
                <ItemsTable />
            </div>
        </React.Fragment>
    )
};

export default Items;
