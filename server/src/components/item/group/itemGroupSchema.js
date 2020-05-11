const yup = require('yup');

const itemGroupSchema = yup.object().shape({
	id: yup.number(),
	descricao: yup.string().min(1),
	situacao: yup.string().length(2).nullable(),
});

module.exports = itemGroupSchema;
