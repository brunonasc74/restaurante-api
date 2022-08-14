const { Router } = require('express');
const PedidoController = require('../controllers/PedidoController');

const router = Router();

router
	.get('/pedidos', PedidoController.pegaTodosPedidos)
	.get('/pedidos/:id', PedidoController.pegaUmPedido)
	.post('/pedidos', PedidoController.cadastraPedido)
	.put('/pedidos/:id', PedidoController.atualizaPedido)
	.delete('/pedidos/:id', PedidoController.deletaPedido);

module.exports = router;
