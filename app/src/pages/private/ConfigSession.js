import React, { useState, useEffect } from "react";

import { yup } from "components/form/customYup";
import Form from "components/form/Form";
import Field from "components/form/Field";
import UiMsg from "components/commons/UiMsg";
import { TableCRUD } from "components/commons/Table";
import { ModalConfirm } from "components/commons/Modal";

import Api from "service/Api";

const ConfigSessionSchema = yup(yup => {
    return yup.object().shape({
        id: yup.number().default(0),  
        pedido_id: yup.number().required('Campo obrigatório!').default(0).typeError('Selecione uma opção!'),
        veiculo_id: yup.number().required('Campo obrigatório!').default(0).typeError('Selecione uma opção!')
    })
});

const ConfigSessionForm = ({orders, vehicles, formRef}) => {

    const createSession = async (values) => {
        try {
           await Api.Fretz.Order.create(values);
        } catch (e) {
            UiMsg.error({message: `Ocorreu um erro ao tentar criar a sessão`});
        }
    };

    return (
        <div className="valign-wrapper row">
            <Form
                innerRef={formRef}
                id="orders-form"
                initialValues={ConfigSessionSchema.default()}
                validationSchema={ConfigSessionSchema}
                onSubmit={createSession}
                defaultActionButtons={true}>
                    <span className="card-title center-align">Configuração de Sessão</span>
                    <div className="row">
                        <div className="col s6">
                            <Field title="Veículos"
                                    options={vehicles}
                                    keys={{value: "id", label: "placa"}}
                                    type="select multiple"
                                    name="vehicle_id" required/>
                        </div>
                        <div className="col s6">
                            <Field title="Pedidos"
                                    options={orders}
                                    keys={{value: "id", label: "id"}}
                                    type="select multiple"
                                    name="item_id" required/>
                        </div>
                        <Field title="sessionId" type="hidden" name="sessionId" />
                        <Field title="data" type="hidden" name="data" value={new Date()} />
                    </div>
            </Form>
        </div>
    );
};

const Sessions = (props) => {
    const formRef = React.useRef();
    
    const [orders, setOrders] = useState([]);
    const [vehicles, setVehicles] = useState([]);

    const fetchOrders = async () => {
        const _orders = await Api.Fretz.Order.getAll();
        setOrders(_orders);
    }

    const fetchVehicles = async () => {
        const _vehicles = await Api.Fretz.Vehicle.getAll();
        setVehicles(_vehicles);
    }

    useEffect(() => {
        fetchOrders();
        fetchVehicles();
    }, []);

    return (
        <React.Fragment>
            <div>
                <ConfigSessionForm orders={orders}
                           vehicles={vehicles}
                           formRef={formRef}/>
            </div>
        </React.Fragment>
    )
};

export default Sessions;
