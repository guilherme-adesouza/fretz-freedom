const yup = require('yup');

const regionSchema = yup.object().shape({
	id: yup.number(),
	descricao: yup.string(),
	situacao: yup.string().length(2).nullable(),
});

module.exports = regionSchema;
