const BebidaController = require('../controllers/BebidaController');
const { Router } = require('express');
const router = Router();
const joi = require('../helpers/joiValidation.js');
const { validate } = require('express-validation');

router
	.get('/bebidas', BebidaController.pegaTodasBebidas)
	.get('/bebidas/:id', BebidaController.pegaUmaBebida)
	.post('/bebidas', validate(joi.validarCardapioBebida), BebidaController.criaBebida)
	.put('/bebidas/:id', validate(joi.validarCardapioBebida), BebidaController.atualizaBebida)
	.delete('/bebidas/:id', BebidaController.apagaBebida);

module.exports = router;
