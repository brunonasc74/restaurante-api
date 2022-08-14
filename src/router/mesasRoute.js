const { Router } = require('express');
const MesaController = require('../controllers/MesaController');

const router = Router();

router
	.get('/mesas', MesaController.pegaTodasMesas)
	.get('/mesas/:id', MesaController.pegaUmaMesa)
	.post('/mesas', MesaController.criaMesa)
	.put('/mesas/:id', MesaController.atualizaMesa)
	.delete('/mesas/:id', MesaController.apagaMesa);

module.exports = router;
