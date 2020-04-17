const yup = require('yup');

const userSchema = yup.object().shape({
	id: yup.number(),
	nome: yup.string(),
	email: yup.string(),
	senha: yup.string(),
	situacao: yup.string().length(2).nullable(),
	admin: yup.boolean().default(false),
	super: yup.boolean().default(false),
});

module.exports = userSchema;
