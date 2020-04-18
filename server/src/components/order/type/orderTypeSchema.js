const yup = require('yup');

const orderTypeSchema = yup.object().shape({
	id: yup.number(),
	descricao: yup.string().nullable(),
	situacao: yup.string().length(2).nullable(),
});

module.exports = orderTypeSchema;
