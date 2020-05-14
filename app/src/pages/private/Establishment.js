import React, { useState, useEffect } from "react";

import { yup } from "components/form/customYup";
import Form from "components/form/Form";
import Field from "components/form/Field";
import UiMsg from "components/commons/UiMsg";

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
        rotas_maior_duracao: yup.boolean().default(true),
        agrupamento_itens_diferentes: yup.boolean().default(true),
        // destino: yup.boolean().oneOf([true], 'Deve selecionar um destino final!')
    })
});

const EstablishmentForm = ({updateData, establishment, cities, formRef}) => {

    const editEstablishment = async (values, actions) => {
        // Removido atributo isEdit pois irá sempre editar estabelecimento existente, nunca criar novo.
        try {
            values.cidade_id = Number(values.cidade_id)
            await Api.Fretz.Establishment.update(values.id, values); 
        } catch (e) {
            UiMsg.error({message: `Ocorreu um erro ao tentar editar os parâmetros estabelecimento`});
        } finally {
            actions.setSubmitting(false);
        }
    };

    return (
        <div className="valign-wrapper row">
            <Form
                innerRef={formRef}
                id="establishment-form"
                initialValues={establishment}
                validationSchema={EstablishmentSchema}
                onSubmit={editEstablishment}
                defaultActionButtons={true}>
                    <span className="card-title center-align">Parâmetros do Estabelecimento</span>
                    <div className="row">
                        <div className="col s4">
                            <Field title="Nome" type="text" name="nome" required/>
                        </div>
                        <div className="col s4">
                            <Field title="Latitude" type="text" name="latitude" required/>
                        </div>
                        <div className="col s4">
                            <Field title="Longitude" type="text" name="longitude" required/>
                        </div>
                    </div>                        
                    <div className="row">
                        <div className="col s6">
                            <Field title="Endereço" type="text" name="endereco" required/>
                        </div>
                        <div className="col s6">
                            <Field title="Cidade"
                                   options={cities}
                                   keys={{value: "cod_cidade", label: "nome"}}
                                   type="select"
                                   name="cidade_id" required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s4">
                            <Field title="Jornada (hrs)" 
                                   type="number"
                                   name="jornada" required/>
                        </div>
                        <div className="col s4">
                            <Field type="checkbox" 
                                   name="rotas_maior_duracao" 
                                   description="Rotas com maior duração"/>
                        </div>
                        <div className="col s4">
                            <Field type="checkbox" 
                                   name="agrupamento_itens_diferentes" 
                                   description="Agrupamento de itens diferentes"/>
                        </div>
                        <Field title="estabelecimento_id" type="hidden" name="estabelecimento_id" />
                    </div>
            </Form>
        </div>
    );
};

const Establishment = (props) => {
    const formRef = React.useRef();
    
    const [establishment, setEstablishment] = useState(null);
    const [cities, setCities] = useState([]);

    const fetchEstablishment = async () => {
        const _establishment = await Api.Fretz.Establishment.getAll();
        setEstablishment(_establishment[0]);
    }

    const fetchCities = async () => {
        const _cities = await Api.Fretz.City.getAll();
        setCities(_cities);
    }

    useEffect(() => {
        fetchEstablishment();
        fetchCities();
    }, []);

    if (!establishment) return null;

    return (
        <React.Fragment>
            <div>
                <EstablishmentForm updateData={fetchEstablishment} 
                                   establishment={establishment}
                                   cities={cities}
                                   formRef={formRef}/>
            </div>
        </React.Fragment>
    )
};

export default Establishment;
