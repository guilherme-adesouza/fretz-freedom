import React, { useState, useEffect } from "react";

import { yup } from "components/form/customYup";
import Form from "components/form/Form";
import Field from "components/form/Field";
import UiMsg from "components/commons/UiMsg";
import { TableCRUD } from "components/commons/Table";
import { ModalConfirm } from "components/commons/Modal";

import Api from "service/Api";

const ViagemSchema = yup(yup => {
    return yup.object().shape({
        id: yup.number().default(0),
        situacao: yup.string().required().default('AT'),
        data_inicial: yup.date().required('Campo obrigatório').typeError('Data inválida!'),
        data_final: yup.date(),
        veiculo_id: yup.number().required('Campo obrigatório!').default(0).typeError('Selecione uma opção!'),
        motorista_id: yup.number().required('Campo obrigatório!').default(0).typeError('Selecione uma opção!'),
        despesa: yup.number().default(0).typeError('Informe um valor numérico!'),
    })
});

const ViagemForm = ({updateData, vehicles, clients, formRef}) => {

    const createViagem = async (values, actions) => {
        const isEdit = !!values.id && values.id !== 0;
        try {
            if (isEdit) {
                await Api.Fretz.Travel.update(values.id, values);
            } else {
                await Api.Fretz.Travel.create(values);
            }
            actions.resetForm();
            updateData();
        } catch (e) {
            UiMsg.error({message: `Ocorreu um erro ao tentar ${isEdit ? 'editar' : 'criar'} uma viagem`});
        } finally {
            actions.setSubmitting(false);
        }
    };

    return (
        <div className="valign-wrapper row">
            <Form
                innerRef={formRef}
                id="viagem-form"
                initialValues={ViagemSchema.default()}
                validationSchema={ViagemSchema}
                onSubmit={createViagem}
                defaultActionButtons={true}>
                    <span className="card-title center-align">Cadastro de Viagem</span>
                    <div className="row">
                        <div className="col s6">
                            <Field title="Motorista"
                                    options={clients}
                                    keys={{value: "id", label: "nome"}}
                                    type="select"
                                    name="motorista_id" required/>
                        </div>
                        <div className="col s6">
                            <Field title="Veículo"
                                    options={vehicles}
                                    keys={{value: "id", label: "descricao"}}
                                    type="select"
                                    name="veiculo_id" required/>
                        </div>

                        <div className="col s6">
                            <Field title="Data Inicial" type="date" name="data_inicial" required/>
                        </div>
                        <div className="col s6">
                            <Field title="Despesa" placeholder="R$ " type="number" name="despesa" />
                        </div>                        
                        <Field title="viagemId" type="hidden" name="viagemId" />
                    </div>
            </Form>
        </div>
    );
};

const Travel = (props) => {
    const formRef = React.useRef();
    
    const [viagem, setViagem] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [clients, setClients] = useState([]);

    const fetchVehicles = async () => {
        const _vehicles = await Api.Fretz.Vehicle.getAll();
        setVehicles(_vehicles);
    };

    const fetchViagem = async () => {
        const _viagem = await Api.Fretz.Travel.getAll();
        setViagem(_viagem);
    };

    const fetchClients = async () => {
        const _clients = await Api.Fretz.Person.getAll();
        setClients(_clients);
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
                ModalConfirm(`Você deseja excluir a viagem ${props.id}?`, async () => {
                    try {
                        await Api.Fretz.Travel.delete(props.id);
                        await fetchViagem();
                    } catch (e) {
                        UiMsg.error({message: 'Ocorreu um erro ao tentar excluir a viagem'});
                    }
                })
            },
        },
    ];

    useEffect(() => {
        fetchViagem();
        fetchVehicles();
        fetchClients();
    }, []);

    return (
        <React.Fragment>
            <div>
                <ViagemForm updateData={fetchViagem} 
                            vehicles={vehicles}
                            clients={clients}
                            formRef={formRef}/>
            </div>
            <div>
                <TableCRUD data={viagem} actions={actions}/>
            </div>
        </React.Fragment>
    )
};

export default Travel;
