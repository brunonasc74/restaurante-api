const Joi = require('joi');

module.exports = {
	validarCliente: {
		body: Joi.object({
			nome: Joi.string().alphanum().min(3).max(20),
			sobrenome: Joi.string().alphanum().min(3),
			email: Joi.string().email({ minDomainSegments: 2 }),
			telefone: Joi.string().min(11),
			cpf: Joi.string().min(11),
		}),
	},

	validarCardapioBebida: {
		body: Joi.object({
			nome: Joi.string().min(3),
			categoria: Joi.string(),
			descricao: Joi.string(),
			imagem: Joi.string(),
			porcao: Joi.string(),
			preco: Joi.number(),
		}),
	},

	validarPedido: {
		body: Joi.object({
			cliente_id: Joi.number().integer(),
			cardapio_id: Joi.number().integer().allow(null),
			bebida_id: Joi.number().integer().allow(null),
		}),
	},

	validarMesa: {
		body: Joi.object({
			reserva: Joi.boolean(),
		}),
	},
};
