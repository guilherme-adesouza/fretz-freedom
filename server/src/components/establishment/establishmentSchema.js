const yup = require('yup');

const establishmentSchema = yup.object().shape({
        id: yup.number(),
        nome: yup.string(),
        endereco: yup.string(),
        latitude: yup.string(),
        longitude: yup.string(),
        situacao: yup.string().length(2).nullable(),
        cidade_id: yup.number(),
        jornada: yup.number(),
        rotas_maior_duracao: yup.boolean(),
        agrupamento_itens_diferentes: yup.boolean(),
        destino: yup.number()       
});

module.exports = establishmentSchema;
