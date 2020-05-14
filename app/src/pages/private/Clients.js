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
        data_nascimento: yup.date().required('Campo obrigatório').default(() => (new Date())).typeError('Data inválida!'),
        cnh: yup.string().default(''),
        telefone: yup.number().required('Campo obrigatório!').default('').typeError('Informe um valor numérico!'),
        situacao: yup.string().required().default('AT'),
        email: yup.string().default(''),
        rua: yup.string().required('Campo obrigatório!').default(''),
        cep: yup.number().required('Campo obrigatório!').default('').typeError('Informe somente números!'),
        complemento: yup.string().default(''),
        numero: yup.number().required('Campo obrigatório!').default('').typeError('Informe um valor numérico!'),
        bairro: yup.string().required('Campo obrigatório!').default(''),
        tipo_pessoa_id: yup.number().required('Campo obrigatório!').default(0).typeError('Selecione uma opção!'),
        cidade_cod: yup.number().required('Campo obrigatório!').default(1).typeError('Selecione uma opção!'),
        latitude: yup.string().required('Campo obrigatório').default(''),
        longitude: yup.string().required('Campo obrigatório').default(''),
    })
});

const ClientForm = ({updateData, tipoClient, cities, formRef}) => {

    const createClient = async (values, actions) => {
        console.log('createClient');
        const isEdit = !!values.id && values.id !== 0;
        try {
            if (isEdit) {
                await Api.Fretz.Person.update(values.id, values);
            } else {
                await Api.Fretz.Person.create(values);
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
                            <Field title="Nome" type="text" name="nome" required/>
                        </div>
                        <div className="col s4">
                            <Field title="CPF / CNPJ" type="text" name="cpf_cnpj" required/>
                        </div>
                        <div className="col s4">
                            <Field title="Data Nascimento" type="date" name="data_nascimento" required/>
                        </div>
                        <div className="col s4">
                            <Field title="CNH" type="text" name="cnh" required/>
                        </div>
                        <div className="col s4">
                            <Field title="Telefone" type="text" name="telefone" required/>
                        </div>
                        <div className="col s4">
                            <Field title="Email" type="text" name="email" />
                        </div>
                        <div className="col s4">
                            <Field title="Rua" type="text" name="rua" required />
                        </div>
                        <div className="col s4">
                            <Field title="CEP" type="text" name="cep" required/>
                        </div>
                        <div className="col s4">
                            <Field title="Complemento" type="text" name="complemento" />
                        </div>
                        <div className="col s4">
                            <Field title="Número" type="text" name="numero" required/>
                        </div>
                        <div className="col s4">
                            <Field title="Bairro" type="text" name="bairro" required/>
                        </div>
                        <div className="col s4">
                            <Field title="Cidade"
                                    options={cities}
                                    keys={{value: "cod_cidade", label: "nome"}}
                                    type="select"
                                    required
                                    name="cidade_cod" />
                        </div>
                        <div className="col s4">
                            <Field title="Latitude" type="text" name="latitude" required/>
                        </div>
                        <div className="col s4">
                            <Field title="Longitude" type="text" name="longitude" required/>
                        </div>
                        <div className="col s4">
                            <Field title="Tipo de Cliente"
                                    options={tipoClient}
                                    keys={{value: "id", label: "descricao"}}
                                    type="select"
                                    required
                                    name="tipo_pessoa_id" />
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
    const [cities, setCities] = useState([]);

    const fetchTipoClient = async () => {
        const _tipoClient = await Api.Fretz.PersonType.getAll();
        setTipoClient(_tipoClient);
    };

    const fetchClient = async () => {
        const _client = await Api.Fretz.Person.getAll();
        setClient(_client);
    }

    const fetchCities = async () => {
        const _cities = await Api.Fretz.City.getAll();
        setCities(_cities);
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
                        await Api.Fretz.Person.delete(props.id);
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
        fetchCities();
    }, []);

    return (
        <React.Fragment>
            <div>
                <ClientForm updateData={fetchClient} 
                           tipoClient={tipoClient}
                           cities={cities}
                           formRef={formRef}/>
            </div>
            <div>
                <TableCRUD data={client} actions={actions}/>
            </div>
        </React.Fragment>
    )
};

export default Client;
