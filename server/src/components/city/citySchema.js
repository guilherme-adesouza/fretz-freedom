const yup = require('yup');

const citySchema = yup.object().shape({
  	cod_cidade: yup.number(),
	nome: yup.string(),
	estado_cod_estado: yup.number(),
	cep: yup.string().nullable(),
	regiao_id: yup.number(),
	situacao: yup.string().length(2).nullable(),
});

module.exports = citySchema;
