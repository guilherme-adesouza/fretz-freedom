const yup = require('yup');

const itemGroupSchema = yup.object().shape({
	id: yup.number(),
	nome: yup.string(),
	cpf_cnpj: yup.string(),
	data_nascimento: yup.date().nullable(),
	cnh: yup.string().nullable(),
	telefone: yup.string(),
	situacao: yup.string().length(2).nullable(),
	rua: yup.string(),
	cep: yup.string(),
	complemento: yup.string().nullable(),
	numero: yup.number(),
	bairro: yup.string(),
	tipo_pessoa_id: yup.number(),
	cidade_cod: yup.number(),
	latitude: yup.number(),
	longitude: yup.number(),
});

module.exports = itemGroupSchema;
