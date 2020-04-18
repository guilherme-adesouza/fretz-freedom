const yup = require('yup');

const travelSchema = yup.object().shape({
	id: yup.number(),
	data_inicial: yup.string(),
	data_final: yup.string(),
	veiculo_id: yup.number(),
	motorista_id: yup.number(),
	despesa: yup.number().nullable(),
	situacao: yup.string().length(2).nullable(),
});

module.exports = travelSchema;
