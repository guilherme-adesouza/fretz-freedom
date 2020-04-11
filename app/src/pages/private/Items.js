import "components/commons/Breadcrumb.css";
import React, { useState, useEffect } from "react";
import M from "materialize-css";

import { yup } from "components/form/customYup";
import Form from "components/form/Form";
import Field from "components/form/Field";
import FormButton from "components/form/FormButton";
import UiMsg from "components/commons/UiMsg";
import {TableCRUD} from "components/commons/Table";

import Api from "service/Api";

const ItemSchema = yup(yup => {
    return yup.object().shape({
        id: yup.number().default(0),
        descricao: yup.string().required().default(''),
        unidade_medida: yup.string().required().default('UN'),
        grupo_item_id: yup.number().required().default(0),
        valor_custo: yup.number().required().default(0),
        valor_venda: yup.number().required().default(0),
        volume: yup.number().required().default(0),
        peso: yup.number().required().default(0),
    })
});

const ItemsForm = ({updateData, groupItems}) => {

    useEffect(() => {
        M.updateTextFields();
    }, []);

    const createItem = async (values, actions) => {
        try {
            values.quantidade = 0;
            const data = await Api.Fretz.Item.create(values);
            actions.resetForm();
        } catch (e) {
            UiMsg.error({message: 'Ocorreu um erro ao tentar criar o item'});
        } finally {
            actions.setSubmitting(false);
        }
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
                            <div className="col s12">
                                <Field title="Descrição" type="text" name="descricao" />
                            </div>
                            <div className="col s4">
                                <Field title="Unid. Medida" type="text" name="unidade_medida" />
                            </div>
                            <div className="col s4">
                                <Field title="Grupo do Item"
                                       options={groupItems}
                                       keys={{value: "id", label: "descricao"}}
                                       type="select"
                                       name="grupo_item_id" />
                            </div>
                            <div className="col s4">
                                <Field title="Valor de Custo" placeholder="R$ " type="text" name="valor_custo" />
                            </div>
                            <div className="col s4">
                                <Field title="Valor de Venda" placeholder="R$ " type="text" name="valor_venda" />
                            </div>
                            <div className="col s4">
                                <Field title="Volume" type="text" name="volume" />
                            </div>
                            <div className="col s4">
                                <Field title="Peso" type="text" name="peso" />
                            </div>
                            <Field title="itemId" type="hidden" name="itemId" />
                        </div>
                        <div className="card-action right-align">
                            <FormButton type="submit">Salvar</FormButton>
                            <FormButton type="reset">Limpar</FormButton>
                        </div>
                    </div>
            </Form>
        </div>
    );
};

// Necessário preencher a tabela com dados vindos do banco e configurar ações dos botões Editar/Excluir
const ItemsTable = ({items}) => {
    return (
        <TableCRUD data={items}/>
    )
}

const Items = (props) => {
    const [items, setItems] = useState([]);
    const [groupItems, setGroupItems] = useState([]);

    const fetchData = async () => {
        const _items = await Api.Fretz.Item.getAll();
        const _groupItems = await Api.Fretz.GroupItem.getAll();
        setItems(_items);
        setGroupItems(_groupItems);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <React.Fragment>
            <div>
                <ItemsForm updateData={fetchData} groupItems={groupItems}/>
            </div>
            <div>
                <ItemsTable items={items}/>
            </div>
        </React.Fragment>
    )
};

export default Items;
