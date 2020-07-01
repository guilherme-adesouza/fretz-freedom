import React, { useState, useEffect } from "react";

import { yup } from "components/form/customYup";
import Form from "components/form/Form";
import Field from "components/form/Field";
import UiMsg from "components/commons/UiMsg";
import { TableCRUD } from "components/commons/Table";
import { ModalConfirm } from "components/commons/Modal";

import Api from "service/Api";

const ItemSchema = yup(yup => {
    return yup.object().shape({
        id: yup.number().default(0),
        descricao: yup.string().required('Campo obrigatório!').default(''),
        unidade_medida: yup.string().required('Campo obrigatório!').default('UN'),
        grupo_item_id: yup.number().required('Campo obrigatório!').default(0).typeError('Selecione uma opção!'),
        valor_custo: yup.number().required('Campo obrigatório!').default(0).typeError('Informe um valor numérico!'),
        valor_venda: yup.number().required('Campo obrigatório!').default(0).typeError('Informe um valor numérico!'),
        volume: yup.number().required('Campo obrigatório!').default(0).typeError('Informe um valor numérico!'),
        peso: yup.number().required('Campo obrigatório!').default(0).typeError('Informe um valor numérico!'),
    })
});

const ItemsForm = ({updateData, groupItems, formRef}) => {

    const createItem = async (values, actions) => {
        const isEdit = !!values.id && values.id !== 0;
        try {
            values.quantidade = 0;
            if (isEdit) {
                await Api.Fretz.Item.update(values.id, values);
            } else {
                await Api.Fretz.Item.create(values);
            }
            actions.resetForm();
            updateData();
        } catch (e) {
            UiMsg.error({message: `Ocorreu um erro ao tentar ${isEdit ? 'editar' : 'criar'} o item`});
        } finally {
            actions.setSubmitting(false);
        }
    };

    return (
        <div className="valign-wrapper row">
            <Form
                innerRef={formRef}
                id="items-form"
                initialValues={ItemSchema.default()}
                validationSchema={ItemSchema}
                onSubmit={createItem}
                defaultActionButtons={true}>
                    <span className="card-title center-align">Cadastro de Itens</span>
                    <div className="row">
                        <div className="col s12">
                            <Field title="Descrição" type="text" name="descricao" required/>
                        </div>
                        <div className="col s4">
                            <Field title="Unid. Medida" type="text" name="unidade_medida" required/>
                        </div>
                        <div className="col s4">
                            <Field title="Grupo do Item"
                                    options={groupItems}
                                    keys={{value: "id", label: "descricao"}}
                                    type="select"
                                    name="grupo_item_id" required/>
                        </div>
                        <div className="col s4">
                            <Field title="Valor de Custo" placeholder="R$ " type="text" name="valor_custo" required/>
                        </div>
                        <div className="col s4">
                            <Field title="Valor de Venda" placeholder="R$ " type="text" name="valor_venda" required/>
                        </div>
                        <div className="col s4">
                            <Field title="Volume por KG (L)" type="text" name="volume" required/>
                        </div>
                        <div className="col s4">
                            <Field title="Peso" type="text" name="peso" required/>
                        </div>
                        <Field title="itemId" type="hidden" name="itemId" />
                    </div>
            </Form>
        </div>
    );
};

const Items = (props) => {
    const formRef = React.useRef();
    
    const [items, setItems] = useState([]);
    const [groupItems, setGroupItems] = useState([]);

    const fetchGroupItems = async () => {
        const _groupItems = await Api.Fretz.GroupItem.getAll();
        setGroupItems(_groupItems);
    };

    const fetchItems = async () => {
        const _items = await Api.Fretz.Item.getAll();
        setItems(_items);
    }

    const actions = [
        {
            description: "Editar", 
            icon: "edit", 
            onClick: (values) => formRef.current && formRef.current.resetForm({values}),
        },
        {
            description: "Excluir", 
            icon: "delete_outline",
            onClick: (props) => {
                ModalConfirm(`Você deseja excluir o item ${props.descricao}?`, async () => {
                    try {
                        await Api.Fretz.Item.delete(props.id);
                        await fetchItems();
                    } catch (e) {
                        UiMsg.error({message: 'Ocorreu um erro ao tentar excluir o item'});
                    }
                })
            },
        },
    ];

    useEffect(() => {
        fetchItems();
        fetchGroupItems();
    }, []);

    return (
        <React.Fragment>
            <div>
                <ItemsForm updateData={fetchItems} 
                           groupItems={groupItems}
                           formRef={formRef}/>
            </div>
            <div>
                <TableCRUD data={items} actions={actions}/>
            </div>
        </React.Fragment>
    )
};

export default Items;
