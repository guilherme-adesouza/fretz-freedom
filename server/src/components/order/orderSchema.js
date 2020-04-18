const yup = require('yup');

const orderSchema = yup.object().shape({
	id: yup.number(),
	data_inicial: yup.date(),
	valor: yup.number(),
	situacao: yup.string().length(2).nullable(),
	observacao: yup.string().nullable(),
	rua: yup.string(),
	cep: yup.string(),
	complemento: yup.string().nullable(),
	numero: yup.number(),
	bairro: yup.string(),
	pessoa_id: yup.number(),
	categoria_pedido_id: yup.number(),
	data_entrega: yup.date().nullable(),
});

module.exports = orderSchema;
