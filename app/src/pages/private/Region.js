import React, { useState, useEffect } from "react";

import { yup } from "components/form/customYup";
import Form from "components/form/Form";
import Field from "components/form/Field";
import UiMsg from "components/commons/UiMsg";
import { TableCRUD } from "components/commons/Table";
import { ModalConfirm } from "components/commons/Modal";

import Api from "service/Api";

const RegionSchema = yup(yup => {
    return yup.object().shape({
        id: yup.number().default(0),
        descricao: yup.string().required('Campo obrigatório!').default(''),
        situacao: yup.string().required().default('AT'),
        })
});

const RegionForm = ({updateData, groupRegion, formRef}) => {

    const createRegion = async (values, actions) => {
        const isEdit = !!values.id && values.id !== 0;
        try {
            if (isEdit) {
                await Api.Fretz.Region.update(values.id, values);
            } else {
                await Api.Fretz.Region.create(values);
            }
            actions.resetForm();
            updateData();
        } catch (e) {
            UiMsg.error({message: `Ocorreu um erro ao tentar ${isEdit ? 'editar' : 'criar'} a região`});
        } finally {
            actions.setSubmitting(false);
        }
    };

    return (
        <div className="valign-wrapper row">
            <Form
                innerRef={formRef}
                id="region-form"
                initialValues={RegionSchema.default()}
                validationSchema={RegionSchema}
                onSubmit={createRegion}
                defaultActionButtons={true}>
                    <span className="card-title center-align">Cadastro de Regiões</span>
                    <div className="row">
                        <div className="col s12">
                            <Field title="Descrição" type="text" name="descricao" required/>
                        </div>
                            <Field title="regionId" type="hidden" name="regionId" />
                    </div>
            </Form>
        </div>
    );
};

const Region = (props) => {
    const formRef = React.useRef();
    
    const [region, setRegion] = useState([]);

    const fetchRegion = async () => {
        const _region = await Api.Fretz.Region.getAll();
        setRegion(_region);
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
                ModalConfirm(`Você deseja excluir a região ${props.descricao}?`, async () => {
                    try {
                        await Api.Fretz.Region.delete(props.id);
                        await fetchRegion();
                    } catch (e) {
                        UiMsg.error({message: 'Ocorreu um erro ao tentar excluir a região'});
                    }
                })
            },
        },
    ];

    useEffect(() => {
        fetchRegion();
    }, []);

    return (
        <React.Fragment>
            <div>
                <RegionForm updateData={fetchRegion} 
                           formRef={formRef}/>
            </div>
            <div>
                <TableCRUD data={region} actions={actions}/>
            </div>
        </React.Fragment>
    )
};

export default Region;
