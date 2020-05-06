import "components/commons/Breadcrumb.css";
import React, { useState, useEffect } from "react";

import { yup } from "components/form/customYup";
import Form from "components/form/Form";
import Field from "components/form/Field";
import UiMsg from "components/commons/UiMsg";
import { TableCRUD } from "components/commons/Table";
import { ModalConfirm } from "components/commons/Modal";

import Api from "service/Api";

const OrderSchema = yup(yup => {
    return yup.object().shape({
        id: yup.number().default(0),
        data_inicial: yup.date().required('Campo obrigatório').default(() => (new Date())).typeError('Data inválida!'),
        valor: yup.number().required('Campo obrigatório!').default(0).typeError('Informe um valor numérico!'),
        situacao: yup.string().default('AT'),
        observacao: yup.string().default(''),
        rua: yup.string().required('Campo obrigatório!').default(''),
        cep: yup.number().required('Campo obrigatório!').typeError('Informe um valor numérico!'),
        complemento: yup.string().default(''),
        numero: yup.number().required('Campo obrigatório!').default(0).typeError('Informe um valor numérico!'),
        bairro: yup.string().required('Campo obrigatório!').default(''),
        pessoa_id: yup.number().required('Campo obrigatório!').default(0).typeError('Selecione uma opção!'),
        data_entrega: yup.date().default(() => (new Date()))
    })
});

const OrdersForm = ({updateData, clients, items, formRef}) => {

    const createOrder = async (values, actions) => {
        const isEdit = !!values.id && values.id !== 0;
        try {
            if (isEdit) {
                await Api.Fretz.Order.update(values.id, values);
            } else {
                await Api.Fretz.Order.create(values);
            }
            actions.resetForm();
            updateData();
        } catch (e) {
            UiMsg.error({message: `Ocorreu um erro ao tentar ${isEdit ? 'editar' : 'criar'} o pedido`});
        } finally {
            actions.setSubmitting(false);
        }
    };

    return (
        <div className="valign-wrapper row">
            <Form
                innerRef={formRef}
                id="orders-form"
                initialValues={OrderSchema.default()}
                validationSchema={OrderSchema}
                onSubmit={createOrder}
                defaultActionButtons={true}>
                    <span className="card-title center-align">Cadastro de Pedidos</span>
                    <div className="row">
                        <div className="col s4">
                            <Field title="Data Inicial" type="date" name="data_inicial" />
                        </div>
                        <div className="col s4">
                            <Field title="Data de Entrega" type="date" name="data_entrega" />
                        </div>
                        <div className="col s4">
                            <Field title="Valor" type="text" name="valor" />
                        </div>
                        <div className="col s12">
                            <Field title="Observação" type="text" name="observacao" />
                        </div>
                        <div className="col s6">
                            <Field title="Rua" type="text" name="rua" />
                        </div>
                        <div className="col s6">
                            <Field title="Bairro" type="text" name="bairro" />
                        </div>
                        <div className="col s4">
                            <Field title="CEP" type="text" name="cep" />
                        </div>
                        <div className="col s4">
                            <Field title="Número" type="text" name="numero" />
                        </div>
                        <div className="col s4">
                            <Field title="Complemento" type="text" name="complemento" />
                        </div>
                        <div className="col s4">
                            <Field title="Cliente"
                                    options={clients}
                                    keys={{value: "id", label: "nome"}}
                                    type="select"
                                    name="pessoa_id" />
                        </div>
                        <div className="col s4">
                            <Field title="Item"
                                    options={items}
                                    keys={{value: "id", label: "descricao"}}
                                    type="select multiple"
                                    name="item_id" />
                        </div>
                        <Field title="orderId" type="hidden" name="orderId" />
                    </div>
            </Form>
        </div>
    );
};

const Orders = (props) => {
    const formRef = React.useRef();
    
    const [orders, setOrders] = useState([]);
    const [items, setItems] = useState([]);
    const [clients, setClients] = useState([]);

    const fetchItems = async () => {
        const _items = await Api.Fretz.Item.getAll();
        setItems(_items);
    };

    const fetchClients = async () => {
        const _clients = await Api.Fretz.Person.getAll();
        setClients(_clients);
    };

    const fetchOrders = async () => {
        const _orders = await Api.Fretz.Order.getAll();
        setOrders(_orders);
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
                ModalConfirm(`Você deseja excluir o pedido ${props.id}?`, async () => {
                    try {
                        await Api.Fretz.Order.delete(props.id);
                        await fetchOrders();
                    } catch (e) {
                        UiMsg.error({message: 'Ocorreu um erro ao tentar excluir o pedido'});
                    }
                })
            },
        },
    ];

    useEffect(() => {
        fetchOrders();
        fetchItems();
        fetchClients();
    }, []);

    return (
        <React.Fragment>
            <div>
                <OrdersForm updateData={fetchOrders} 
                           items={items}
                           clients={clients}
                           formRef={formRef}/>
            </div>
            <div>
                <TableCRUD data={orders} actions={actions}/>
            </div>
        </React.Fragment>
    )
};

export default Orders;
