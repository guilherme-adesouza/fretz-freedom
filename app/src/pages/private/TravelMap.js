import React, { useEffect, useState } from "react";
import {Form, Formik} from "formik";

import { yup } from "components/form/customYup";
import Field from "components/form/Field";
import FormButton from "components/form/FormButton";
import PlotMap from "components/map/PlotMap";

import Api from "service/Api";

const TravelMapSchema = yup(yup => {
    return yup.object().shape({
        travel_id: yup.number().default(0),
    })
});


const TravelMap = ({travels = []}) => {
    const [points, setPoints] = useState([]);

    const onSubmit = async (values, actions) => {
        const data = await Api.Fretz.Travel.getPoints(values.travel_id);
        setPoints(data.map(i => [i.latitude, i.longitude]))
    }

    return (
        <div className="container">
            <Formik
                onSubmit={onSubmit}
                initialValues={TravelMapSchema.default()}
                validationSchema={TravelMapSchema}>
                <Form className="col s12">
                    <div className="card-content">
                        <div style={{display: 'flex', alignItems: 'center', width: '100%'}}>
                            <Field title="Viagem"
                                    options={travels}
                                    keys={{value: "id", label: "id"}}
                                    type="select"
                                    innerStyle={{width: '100%'}}
                                    name="travel_id"/>
                            <FormButton type="submit">Buscar</FormButton>
                        </div>
                    </div>
                </Form>
            </Formik>
            <PlotMap points={points}/>
        </div>
    )
}


const TravelMapContainer = () => {

    const [travels, setTravels] = useState(null);
   
    const fetchTravels = async () => {
        const _travels = await Api.Fretz.Travel.getAll();
        setTravels(_travels);
    }

    useEffect(() => {
        fetchTravels();
    }, [])

    if (!travels) return null;
    
    return (
        <TravelMap travels={travels}/>
    )
}

export default TravelMapContainer;