const yup = require('yup');

const establishmentSchema = yup.object().shape({
        id: yup.number(),
        nome: yup.string().required(),
        endereco: yup.string().required(),
        latitude: yup.string().required(),
        longitude: yup.string().required(),
        situacao: yup.string().length(2).nullable(),
        cidade_id: yup.number().required(),
        jornada: yup.number().required(),
        rotas_maior_duracao: yup.boolean().required(),
        agrupamento_itens_diferentes: yup.boolean().required(),
        destino: yup.number(),
});

module.exports = establishmentSchema;
