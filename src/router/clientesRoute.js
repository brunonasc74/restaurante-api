const ClienteController = require('../controllers/ClienteController.js');
const { Router } = require('express');
const route = Router();

route
	.get('/clientes', ClienteController.pegaTodosClientes)
	.get('/clientes/:id', ClienteController.pegaUmCliente)
	.post('/clientes', ClienteController.criaCliente)
	.put('/clientes/:id', ClienteController.editaCliente)
	.delete('/clientes/:id', ClienteController.apagaCliente);

module.exports = route;
