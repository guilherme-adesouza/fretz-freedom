import React, {useEffect, useState} from "react";

import { yup } from "components/form/customYup";
import Form from "components/form/Form";
import Field from "components/form/Field";
import UiMsg from "components/commons/UiMsg";
import { TableCRUD } from "components/commons/Table";
import { ModalConfirm } from "components/commons/Modal";

import Api from "service/Api";

const ItemGroupSchema = yup(yup => {
    return yup.object().shape({
        descricao: yup.string().required().default(''),
        situacao: yup.string().required().default('AT'),
    })
});

const ItemGroupsForm = ({updateData, formRef}) => {

    const createItemGroup = async (values, actions) => {
        const isEdit = !!values.id && values.id != 0;
        try {
            if (isEdit) {
                await Api.Fretz.GroupItem.update(values.id, values);
            } else {
                await Api.Fretz.GroupItem.create(values);
            }
            actions.resetForm();
            updateData();
        } catch (e) {
            UiMsg.error({message: `Ocorreu um erro ao tentar ${isEdit ? 'editar' : 'criar'} o grupo de item`});
        } finally {
            actions.setSubmitting(false);
        }
    };

    return (
        <div className="valign-wrapper row">
            <Form
                innerRef={formRef}
                id="item-group-form"
                initialValues={ItemGroupSchema.default()}
                onSubmit={createItemGroup}
                defaultActionButtons={true}>
                    <span className="card-title center-align">Cadastro de Grupos de Itens</span>
                    <div className="row">
                        <div className="col s12">
                            <Field title="Descrição" type="text" name="descricao" />
                        </div>
                        <Field title="itemGroupId" type="hidden" name="itemGroupId" />
                    </div>
            </Form>
        </div>
    );
};

const ItemGroups = (props) => {
    const formRef = React.useRef();
    const [groupItems, setGroupItems] = useState([]);
    
    const fetchData = async () => {
        const _groupItems = await Api.Fretz.GroupItem.getAll();
        setGroupItems(_groupItems);
    };

    useEffect(() => {
        fetchData();
    }, []);

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
                        await Api.Fretz.GroupItem.delete(props.id);
                        await fetchData();
                    } catch (e) {
                        UiMsg.error({message: 'Ocorreu um erro ao tentar excluir o grupo de item'});
                    }
                })
            },
        },
    ];

    return (
        <React.Fragment>
            <div>
                <ItemGroupsForm updateData={fetchData} formRef={formRef}/>
            </div>
            <div>
                <TableCRUD data={groupItems} actions={actions}/>
            </div>
        </React.Fragment>
    )
};

export default ItemGroups;
