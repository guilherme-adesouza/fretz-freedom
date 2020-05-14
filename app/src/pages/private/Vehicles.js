import React, { useState, useEffect } from "react";

import { yup } from "components/form/customYup";
import Form from "components/form/Form";
import Field from "components/form/Field";
import UiMsg from "components/commons/UiMsg";
import { TableCRUD } from "components/commons/Table";
import { ModalConfirm } from "components/commons/Modal";

import Api from "service/Api";

const VehicleSchema = yup(yup => {
    return yup.object().shape({
        id: yup.number().default(0),
        descricao: yup.string().required('Campo obrigatório').default(''),
        placa: yup.string().required('Campo obrigatório!').matches(/^[A-Z]{3}[-][0-9][A-Z0-9][0-9]{2}$/, 'Formato de placa inválido!').default(''),
        km: yup.number().required('Campo obrigatório!').default(0).typeError('Informe um valor numérico!'),
        capacidade_peso: yup.number().required('Campo obrigatório!').default(0).typeError('Informe um valor numérico!'),
        tara: yup.number().required('Campo obrigatório!').default(0).typeError('Informe um valor numérico!'),
        cor: yup.string().default(''),
        tipo_veiculo_id: yup.number().required('Campo obrigatório!').default(0).typeError('Selecione uma opção!'),
        situacao: yup.string().default('AT'),
        capacidade_volume: yup.number().required('Campo obrigatório!').default(0).typeError('Informe um valor numérico!'),
        compartimento: yup.number().required('Campo obrigatório!').default(1).typeError('Informe um valor numérico!'),
    })
});

const VehiclesForm = ({updateData, vehicleTypes, formRef}) => {

    const createVehicle = async (values, actions) => {
        const isEdit = !!values.id && values.id !== 0;
        try {
            if (isEdit) {
                await Api.Fretz.Vehicle.update(values.id, values);
            } else {
                await Api.Fretz.Vehicle.create(values);
            }
            actions.resetForm();
            updateData();
        } catch (e) {
            UiMsg.error({message: `Ocorreu um erro ao tentar ${isEdit ? 'editar' : 'criar'} o veículo`});
        } finally {
            actions.setSubmitting(false);
        }
    };

    return (
        <div className="valign-wrapper row">
            <Form
                innerRef={formRef}
                id="vehicles-form"
                initialValues={VehicleSchema.default()}
                validationSchema={VehicleSchema}
                onSubmit={createVehicle}
                defaultActionButtons={true}>
                    <span className="card-title center-align">Cadastro de Veículos</span>
                    <div className="row">
                        <div className="col s12">
                            <Field title="Descrição" type="text" name="descricao" required/>
                        </div>
                        <div className="col s4">
                            <Field title="Placa" type="text" name="placa" pattern="/^[A-Z]{3}[-][0-9][A-Z0-9][0-9]{2}$/" required/>
                        </div>
                        <div className="col s4">
                            <Field title="Km" type="text" name="km" required/>
                        </div>
                        <div className="col s4">
                            <Field title="Capacidade Peso" type="text" name="capacidade_peso" required/>
                        </div>
                        <div className="col s4">
                            <Field title="Tara" type="text" name="tara" required/>
                        </div>
                        <div className="col s4">
                            <Field title="Cor" type="text" name="cor" />
                        </div>
                        <div className="col s4">
                            <Field title="Capacidade Volume" type="text" name="capacidade_volume" />
                        </div>
                        <div className="col s4">
                            <Field title="Compartimentos" type="text" name="compartimento" required/>
                        </div>
                        <div className="col s4">
                            <Field title="Tipo de Veículo"
                                    options={vehicleTypes}
                                    keys={{value: "id", label: "descricao"}}
                                    type="select"
                                    name="tipo_veiculo_id" required/>
                        </div>
                        <Field title="vehicleId" type="hidden" name="vehicleId" />
                    </div>
            </Form>
        </div>
    );
};

const Vehicles = (props) => {
    const formRef = React.useRef();
    
    const [vehicles, setVehicles] = useState([]);
    const [vehicleTypes, setVehicleTypes] = useState([]);

    const fetchVehicleTypes = async () => {
        const _vehicleTypes = await Api.Fretz.VehicleType.getAll();
        setVehicleTypes(_vehicleTypes);
    };

    const fetchVehicles = async () => {
        const _vehicles = await Api.Fretz.Vehicle.getAll();
        setVehicles(_vehicles);
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
                ModalConfirm(`Você deseja excluir o veículo ${props.descricao}?`, async () => {
                    try {
                        await Api.Fretz.Vehicle.delete(props.id);
                        await fetchVehicles();
                    } catch (e) {
                        UiMsg.error({message: 'Ocorreu um erro ao tentar excluir o veículo'});
                    }
                })
            },
        },
    ];

    useEffect(() => {
        fetchVehicles();
        fetchVehicleTypes();
    }, []);

    return (
        <React.Fragment>
            <div>
                <VehiclesForm updateData={fetchVehicles} 
                           vehicleTypes={vehicleTypes}
                           formRef={formRef}/>
            </div>
            <div>
                <TableCRUD data={vehicles} actions={actions}/>
            </div>
        </React.Fragment>
    )
};

export default Vehicles;
