const { Router } = require('express');
const PedidoController = require('../controllers/PedidoController');

const router = Router();

router
	.get('/pedidos', PedidoController.pegaTodosPedidos)
	.get('/pedidos/:id', PedidoController.pegaUmPedido)
	.post('/pedidos', PedidoController.criaPedido)
	.put('/pedidos/:id', PedidoController.atualizaPedido)
	.delete('/pedidos/:id', PedidoController.apagaPedido);

module.exports = router;
