const { Router } = require('express');
const PedidoController = require('../controllers/PedidoController');
const router = Router();
const joi = require('../helpers/joiValidation.js');
const { validate } = require('express-validation');

router
	.get('/pedidos', PedidoController.pegaTodosPedidos)
	.get('/pedidos/:id', PedidoController.pegaUmPedido)
	.post('/pedidos', validate(joi.validarPedido), PedidoController.cadastraPedido)
	.put('/pedidos/:id', validate(joi.validarPedido), PedidoController.atualizaPedido)
	.delete('/pedidos/:id', PedidoController.deletaPedido);

module.exports = router;
