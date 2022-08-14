const ClienteController = require('../controllers/ClienteController.js');
const { Router } = require('express');
const route = Router();

route
	.get('/clientes', ClienteController.pegaTodosClientes)
	.get('/clientes/:id', ClienteController.pegaUmCliente)
	.post('/clientes', ClienteController.criaCliente)
	.put('/clientes/:id', ClienteController.editaCliente)
	.delete('/clientes/:id', ClienteController.apagaCliente)
	.get('/clientes/pedidos/:id', ClienteController.pegaPedidosDeCliente)
	.delete('/clientes/pedidos/:id', ClienteController.apagaPedidosDeCliente);

module.exports = route;
