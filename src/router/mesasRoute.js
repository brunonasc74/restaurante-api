const { Router } = require('express');
const MesaController = require('../controllers/MesaController');
const router = Router();
const joi = require('../helpers/joiValidation.js');
const { validate } = require('express-validation');

router
	.get('/mesas', MesaController.pegaTodasMesas)
	.get('/mesas/:id', MesaController.pegaUmaMesa)
	.post('/mesas', validate(joi.validarMesa), MesaController.criaMesa)
	.put('/mesas/:id', validate(joi.validarMesa), MesaController.atualizaMesa)
	.delete('/mesas/:id', MesaController.apagaMesa);

module.exports = router;
