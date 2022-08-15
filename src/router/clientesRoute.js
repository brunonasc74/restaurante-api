const ClienteController = require('../controllers/ClienteController.js');
const { Router } = require('express');
const router = Router();
const joi = require('../helpers/joiValidation.js');
const { validate } = require('express-validation');

router
	.get('/clientes', ClienteController.pegaTodosClientes)
	.get('/clientes/:id', ClienteController.pegaUmCliente)
	.post('/clientes', validate(joi.validarCliente), ClienteController.criaCliente)
	.put('/clientes/:id', validate(joi.validarCliente), ClienteController.editaCliente)
	.delete('/clientes/:id', ClienteController.apagaCliente)
	.get('/clientes/pedidos/:id', ClienteController.pegaPedidosDeCliente)
	.delete('/clientes/pedidos/:id', ClienteController.apagaPedidosDeCliente);

module.exports = router;
