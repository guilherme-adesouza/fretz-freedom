const yup = require('yup');

const stateSchema = yup.object().shape({
	cod_estado: yup.number(),
	sigla: yup.string().length(2),
	nome: yup.string().nullable(),
});

module.exports = stateSchema;
