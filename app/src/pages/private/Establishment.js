import "components/commons/Breadcrumb.css";
import React, { useState, useEffect } from "react";

import { yup } from "components/form/customYup";
import Form from "components/form/Form";
import Field from "components/form/Field";
import UiMsg from "components/commons/UiMsg";
import M from "materialize-css";

import Api from "service/Api";

const EstablishmentSchema = yup(yup => {
    return yup.object().shape({
        id: yup.number().default(0),
        nome: yup.string().required('Campo obrigatório').default(''),
        endereco: yup.string().required('Campo obrigatório!').default(''),
        latitude: yup.string().required('Campo obrigatório').default(''),
        longitude: yup.string().required('Campo obrigatório!').default(''),
        situacao: yup.string().required().default('AT'),
        cidade_id: yup.number().required('Campo obrigatório!').default(0).typeError('Selecione uma opção!'),
        jornada: yup.number().required('Campo obrigatório!').default('').typeError('Informe um valor numérico!'),
        rotas_maior_duracao: yup.boolean().default('true'),
        destino: yup.boolean().oneOf([true], 'Deve selecionar um destino final!')
        })
});

const EstablishmentForm = ({updateData, establishments, cities, formRef}) => {

    const editEstablishment = async (values, actions) => {
        // Removido atributo isEdit pois irá sempre editar estabelecimento existente, nunca criar novo.
        try {
            await Api.Fretz.Region.update(values.id, values); 
            actions.resetForm();
            updateData();   
        } catch (e) {
            UiMsg.error({message: `Ocorreu um erro ao tentar editar o estabelecimento`});
        } finally {
            actions.setSubmitting(false);
        }
    };

    return (
        <div className="valign-wrapper row">
            <Form
                innerRef={formRef}
                id="establishment-form"
                initialValues={{EstablishmentSchema, isAwesome: false}}
                validationSchema={EstablishmentSchema}
                onSubmit={editEstablishment}
                defaultActionButtons={true}>
                    <span className="card-title center-align">Parâmetros do Estabelecimento</span>
                    <div className="row">
                        <div className="col s4">
                            <Field title="Nome" type="text" name="nome" />
                        </div>
                        <div className="col s4">
                            <Field title="Latitude" type="text" name="latitude" />
                        </div>
                        <div className="col s4">
                            <Field title="Longitude" type="text" name="longitude" />
                        </div>
                        <div className="col s6">
                            <Field title="Endereço" type="text" name="endereco" />
                        </div>
                        <div className="col s6">
                            <Field title="Cidade"
                                    options={cities}
                                    keys={{value: "cod_cidade", label: "nome"}}
                                    type="select"
                                    name="cidade_id" />
                        </div>
                        <div className="col s4">
                            <Field title="Jornada (hrs)" type="text" name="jornada" />
                        </div>
                        <div className="col s4">
                        <label>
            <Field type="checkbox" name="isAwesome" />
            Are you awesome?
          </label>
                        </div>
                        <span>Checkbox rotas_maior_duracao, checkbox itens_diferentes, radio button destino</span>
                            <Field title="estabelecimento_id" type="hidden" name="estabelecimento_id" />
                    </div>
            </Form>
        </div>
    );
};

const Establishment = (props) => {
    const formRef = React.useRef();
    
    const [establishments, setEstablishments] = useState([]);

    const fetchEstablishments = async () => {
        const _establishments = await Api.Fretz.Establishment.getAll();
        setEstablishments(_establishments);
    }

    useEffect(() => {
        fetchEstablishments();
    }, []);

    return (
        <React.Fragment>
            <div>
                <EstablishmentForm updateData={fetchEstablishments} 
                           establishments={establishments}
                           formRef={formRef}/>
            </div>
        </React.Fragment>
    )
};

export default Establishment;
