const { Router } = require('express');
const PedidoController = require('../controllers/PedidoController');


const router = Router();

router.get('/pedidos', PedidoController.pegaTodosPedidos);
router.get('/pedidos/:id', PedidoController.pegaUmPedido);
router.post('/pedidos', PedidoController.cadastraPedido);
router.put('/pedidos/:id', PedidoController.atualizaPedido);
module.exports = router;