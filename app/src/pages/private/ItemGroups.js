import React, {useEffect, useState} from "react";
import M from "materialize-css";

import { yup } from "components/form/customYup";
import Form from "components/form/Form";
import Field from "components/form/Field";
import FormButton from "components/form/FormButton";
import UiMsg from "components/commons/UiMsg";
import { TableCRUD } from "components/commons/Table";
import Api from "service/Api";

const ItemGroupSchema = yup(yup => {
    return yup.object().shape({
        descricao: yup.string().required().default('')
    })
});

const ItemGroupsForm = ({updateData}) => {

    useEffect(() => {
        M.updateTextFields();
    }, []);

    const createItemGroup = async (values, actions) => {
        try {
            const data = await Api.Fretz.GroupItem.create(values);
            updateData();
        } catch (e) {
            UiMsg.error({message: 'Ocorreu um erro ao tentar criar o grupo de item'});
        } finally {
            actions.setSubmitting(false);
        }
    };

    return (
        <div className="valign-wrapper row">
            <Form
                id="item-group-form"
                initialValues={ItemGroupSchema.default()}
                onSubmit={createItemGroup}>
                    <div className="card-content">
                        <span className="card-title center-align">
                            Cadastro de Grupos de Itens</span>
                        <div className="row">
                            <div className="input-field col s12">
                                <Field title="Descrição" type="text" name="descricao" />
                            </div>
                            <Field title="itemGroupId" type="hidden" name="itemGroupId" />
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
const ItemGroupsTable = ({groupItems}) => {
    return (
        <TableCRUD data={groupItems}/>
    )
};

const ItemGroups = (props) => {
    const [groupItems, setGroupItems] = useState([]);
    
    const fetchData = async () => {
        const _groupItems = await Api.Fretz.GroupItem.getAll();
        setGroupItems(_groupItems);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <React.Fragment>
            <div>
                <ItemGroupsForm updateData={fetchData}/>
            </div>
            <div>
                <ItemGroupsTable groupItems={groupItems}/>
            </div>
        </React.Fragment>
    )
};

export default ItemGroups;
