const yup = require('yup');

const itemGroupSchema = yup.object().shape({
	id: yup.number(),
	descricao: yup.string(),
	situacao: yup.string().length(2),
});

module.exports = itemGroupSchema;
