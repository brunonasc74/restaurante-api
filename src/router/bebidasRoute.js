const BebidaController = require('../controllers/BebidaController');
const { Router } = require('express');
const route = Router();

route
	.get('/bebidas', BebidaController.pegaTodasBebidas)
	.get('/bebidas/:id', BebidaController.pegaUmaBebida)
	.post('/bebidas', BebidaController.criaBebida)
	.put('/bebidas/:id', BebidaController.atualizaBebida)
	.delete('/bebidas/:id', BebidaController.apagaBebida);

module.exports = route;
