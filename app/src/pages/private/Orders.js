import React, { useState, useEffect } from "react";

import { yup } from "components/form/customYup";
import Form from "components/form/Form";
import Field from "components/form/Field";
import UiMsg from "components/commons/UiMsg";
import { TableCRUD } from "components/commons/Table";
import { ModalConfirm } from "components/commons/Modal";
import Button from "components/commons/Button";

import Api from "service/Api";
import { useForceUpdate } from "utils/reactUtils";

const OrderSchema = yup(yup => {
    return yup.object().shape({
        id: yup.number().default(0),
        data_inicial: yup.date().required('Campo obrigatório').default(() => (new Date())).typeError('Data inválida!'),
        valor: yup.number().required('Campo obrigatório!').default(0).typeError('Informe um valor numérico!'),
        situacao: yup.string().default('AT'),
        observacao: yup.string().default(''),
        rua: yup.string().required('Campo obrigatório!').default(''),
        cep: yup.string().required('Campo obrigatório!'),
        complemento: yup.string().default(''),
        numero: yup.number().required('Campo obrigatório!').default(0).typeError('Informe um valor numérico!'),
        bairro: yup.string().required('Campo obrigatório!').default(''),
        pessoa_id: yup.number().required('Campo obrigatório!').default(0).typeError('Selecione uma opção!'),
        data_entrega: yup.date().default(() => (new Date())), 
        item_id: yup.number().default(0), //temp
        viagem_id: yup.number(), //temp
        quantidade: yup.number().positive(), //temp
        items: yup.array().of(yup.object().shape({
            item_id: yup.number(),
            quantidade: yup.number().positive(),
        }))

    })
});

const OrdersForm = ({updateData, clients, items, formRef, travels}) => {
    const forceUpdate = useForceUpdate();

    const createOrder = async ({item_id, quantidade, ...values}, actions) => {
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

    const addItem = async (event) => {
        const {values, setFieldValue} = formRef.current;
        if (!values.item_id || !values.quantidade) return;
        const items = values.items || [];
        if (items.some(i => i.item_id === values.item_id)) return;
        await setFieldValue('items', items.concat(
            {
                item_id: values.item_id,
                quantidade: values.quantidade,
            }
        ))
        forceUpdate();
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
                            <Field title="Cliente"
                                    options={clients}
                                    keys={{value: "id", label: "nome"}}
                                    type="select"
                                    name="pessoa_id" required/>
                        </div>
                        <div className="col s3">
                            <Field title="Data Inicial" type="date" name="data_inicial" required/>
                        </div>
                        <div className="col s3">
                            <Field title="Data de Entrega" type="date" name="data_entrega" />
                        </div>
                        <div className="col s2">
                            <Field title="Valor" type="number" name="valor" />
                        </div>
                        <div className="col s6">
                            <Field title="Rua" type="text" name="rua" required/>
                        </div>
                        <div className="col s6">
                            <Field title="Bairro" type="text" name="bairro" required/>
                        </div>
                        <div className="col s4">
                            <Field title="CEP" type="text" name="cep" required/>
                        </div>
                        <div className="col s4">
                            <Field title="Número" type="text" name="numero" required/>
                        </div>
                        <div className="col s4">
                            <Field title="Complemento" type="text" name="complemento" />
                        </div>
                        <div className="col s4">
                            <Field  title="Viagem"
                                    options={travels}
                                    keys={{value: "id", label: "id"}}
                                    type="select"
                                    innerStyle={{width: '100%'}}
                                    name="viagem_id"/>
                        </div>
                        <div className="col s8">
                            <Field title="Observação" type="text" name="observacao" />
                        </div>
                        <hr className="col s12" style={{margin: '30px 0'}}/>
                        <div className="col s8">
                            <Field title="Item"
                                    options={items}
                                    keys={{value: "id", label: "descricao"}}
                                    type="select"
                                    name="item_id"/>
                        </div>
                        <div className="col s2">
                            <Field title="Quantidade"
                                   type="number"
                                   name="quantidade"/>
                        </div>
                        <div className="col s2">
                            <Button type="button" onClick={addItem}>
                                Adicionar
                            </Button>
                        </div>
                        {!!formRef.current &&
                        <div className="col s12">
                            <TableCRUD data={formRef.current.values.items} />
                        </div>
                        }
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
    const [travels, setTravels] = useState([]);
   
    const fetchTravels = async () => {
        const _travels = await Api.Fretz.Travel.getAll();
        setTravels(_travels);
    }

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
        fetchTravels();
    }, []);

    return (
        <React.Fragment>
            <div>
                <OrdersForm updateData={fetchOrders} 
                           items={items}
                           clients={clients}
                           travels={travels}
                           formRef={formRef}/>
            </div>
            <div>
                <TableCRUD data={orders} actions={actions}/>
            </div>
        </React.Fragment>
    )
};

export default Orders;
