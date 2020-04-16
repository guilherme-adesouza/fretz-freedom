import "components/commons/Breadcrumb.css";
import React, { useState, useEffect } from "react";

import { yup } from "components/form/customYup";
import Form from "components/form/Form";
import Field from "components/form/Field";
import UiMsg from "components/commons/UiMsg";
import { TableCRUD } from "components/commons/Table";
import { ModalConfirm } from "components/commons/Modal";

import Api from "service/Api";

const ClientSchema = yup(yup => {
    return yup.object().shape({
        id: yup.number().default(0),
        nome: yup.string().required('Campo obrigatório!').default(''),
        cpf_cnpj: yup.number().required('Campo obrigatório').default('').typeError('Informe somente números!'),
        data_nascimento: yup.string().default('').typeError('DD/MM/AAAA'),
        cnh: yup.number().default('').typeError('Informe um valor numérico!'),
        telefone: yup.number().required('Campo obrigatório!').default('').typeError('Informe um valor numérico!'),
        situacao: yup.string().required().default('AT'),
        email: yup.string().default(''),
        rua: yup.string().required('Campo obrigatório!').default(''),
        cep: yup.number().required('Campo obrigatório!').default('').typeError('Informe somente números!'),
        complemento: yup.string().default(''),
        numero: yup.number().required('Campo obrigatório!').default('').typeError('Informe um valor numérico!'),
        bairro: yup.string().required('Campo obrigatório!').default(''),
        latitude: yup.number().required('Campo obrigatório!').default(0).typeError('Informe somente números!'),
        longetude: yup.number().required('Campo obrigatório!').default(0).typeError('Informe somente números!'),
    })
});

const ClientForm = ({updateData, tipoClient, formRef}) => {

    const createClient = async (values, actions) => {
        const isEdit = !!values.id && values.id !== 0;
        try {
            if (isEdit) {
                //await Api.Fretz.Client.update(values.id, values);
            } else {
                //await Api.Fretz.Client.create(values);
            }
            actions.resetForm();
            updateData();
        } catch (e) {
            UiMsg.error({message: `Ocorreu um erro ao tentar ${isEdit ? 'editar' : 'criar'} um cliente`});
        } finally {
            actions.setSubmitting(false);
        }
    };

    return (
        <div className="valign-wrapper row">
            <Form
                innerRef={formRef}
                id="client-form"
                initialValues={ClientSchema.default()}
                validationSchema={ClientSchema}
                onSubmit={createClient}
                defaultActionButtons={true}>
                    <span className="card-title center-align">Cadastro de Cliente</span>
                    <div className="row">
                        <div className="col s12">
                            <Field title="Nome" type="text" name="nome" />
                        </div>
                        <div className="col s4">
                            <Field title="CPF / CNPJ" type="text" name="cpf_cnpj" />
                        </div>
                        <div className="col s4">
                            <Field title="Data Nascimento" type="text" name="data_nascimento" />
                        </div>
                        <div className="col s4">
                            <Field title="CNH" type="text" name="cnh" />
                        </div>
                        <div className="col s4">
                            <Field title="Telefone" type="text" name="telefone" />
                        </div>
                        <div className="col s4">
                            <Field title="Email" type="text" name="email" />
                        </div>
                        <div className="col s4">
                            <Field title="Rua" type="text" name="rua" />
                        </div>
                        <div className="col s4">
                            <Field title="CEP" type="text" name="cep" />
                        </div>
                        <div className="col s4">
                            <Field title="Complemento" type="text" name="complemento" />
                        </div>
                        <div className="col s4">
                            <Field title="Número" type="text" name="numero" />
                        </div>
                        <div className="col s4">
                            <Field title="Bairro" type="text" name="bairro" />
                        </div>
                        <div className="col s4">
                            <Field title="Latitude" type="text" name="latitude" />
                        </div>
                        <div className="col s4">
                            <Field title="Longetude" type="text" name="longetude" />
                        </div>
                        <div className="col s4">
                            <Field title="Tipo de Cliente"
                                    options={tipoClient}
                                    keys={{value: "id", label: "descricao"}}
                                    type="select"
                                    name="tipo_client_id" />
                        </div>
                        <Field title="clientId" type="hidden" name="clientId" />
                    </div>
            </Form>
        </div>
    );
};

const Client = (props) => {
    const formRef = React.useRef();
    
    const [client, setClient] = useState([]);
    const [tipoClient, setTipoClient] = useState([]);

    const fetchTipoClient = async () => {
        //const _tipoClient = await Api.Fretz.tipoClient.getAll();
        //setTipoClient(_tipoClient);
    };

    const fetchClient = async () => {
        //const _client = await Api.Fretz.Client.getAll();
        //setClient(_client);
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
                ModalConfirm(`Você deseja excluir o cliente ${props.descricao}?`, async () => {
                    try {
                        await Api.Fretz.Client.delete(props.id);
                        await fetchClient();
                    } catch (e) {
                        UiMsg.error({message: 'Ocorreu um erro ao tentar excluir o cliente'});
                    }
                })
            },
        },
    ];

    useEffect(() => {
        fetchClient();
        fetchTipoClient();
    }, []);

    return (
        <React.Fragment>
            <div>
                <ClientForm updateData={fetchClient} 
                           tipoClient={tipoClient}
                           formRef={formRef}/>
            </div>
            <div>
                <TableCRUD data={client} actions={actions}/>
            </div>
        </React.Fragment>
    )
};

export default Client;
