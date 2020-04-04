import React from "react";
import { yup } from "components/form/customYup";
import Form from "components/form/Form";
import Field from "components/form/Field";
import FormButton from "components/form/FormButton";
import Button from "components/commons/Button";
import Icon from "components/commons/Icon";
import Api from "service/Api";
import UiMsg from "components/commons/UiMsg";
import "components/commons/Breadcrumb.css";

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
        <div className="valign-wrapper row">
            <Form
                id="items-form"
                initialValues={ItemSchema.default()}
                onSubmit={createItem}>
                    <div className="card-content">
                        <span className="card-title center-align">
                            Cadastro de Itens</span>
                        <div className="row">
                            <div className="input-field col s12">
                                <Field title="Descrição" type="text" name="descricao" />
                            </div>
                            <div className="input-field col s4">
                                <Field title="Unid. Medida" type="text" name="unidade_medida" />
                            </div>
                            <div className="input-field col s4">
                                <Field title="Grupo do Item" type="text" name="grupo_item_id" />
                            </div>
                            <div className="input-field col s4">
                                <Field title="Valor de Custo" placeholder="R$ " type="text" name="valor_custo" />
                            </div>
                            <div className="input-field col s4">
                                <Field title="Valor de Venda" placeholder="R$ " type="text" name="valor_venda" />
                            </div>
                            <div className="input-field col s4">
                                <Field title="Volume" type="text" name="volume" />
                            </div>
                            <div className="input-field col s4">
                                <Field title="Peso" type="text" name="peso" />
                            </div>
                            <Field title="itemId" type="hidden" name="itemId" />
                        </div>
                        <div className="card-action center-align">
                            <FormButton type="submit">Salvar</FormButton>
                            <FormButton type="reset">Limpar</FormButton>
                        </div>
                    </div>
            </Form>
        </div>
    );
};

// Necessário preencher a tabela com dados vindos do banco e configurar ações dos botões Editar/Excluir
const ItemsTable = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <table className="striped teal lighten-2 left-aling">
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
            <nav className="breadcrumb-nav">
                <div className="nav-wrapper">
                    <div className="col s12">
                        <a href="/home" className="breadcrumb">Home</a>
                        <a href="/itemgroups" className="breadcrumb">Itens</a>
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
