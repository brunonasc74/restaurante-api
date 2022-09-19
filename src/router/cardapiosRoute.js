const CardapioController = require('../controllers/CardapioController');
const { Router } = require('express');
const router = Router();
const joi = require('../helpers/joiValidation.js');
const { validate } = require('express-validation');

router
	.get('/cardapios', CardapioController.pegaTodosCardapios)
	.get('/cardapios/:id', CardapioController.pegaUmCardapio)
	.get('/cardapios/categoria/:categoria', CardapioController.pegaCategoria)
	.post(
		'/cardapios',
		validate(joi.validarCardapioBebida),
		CardapioController.criaCardapio
	)
	.put(
		'/cardapios/:id',
		validate(joi.validarCardapioBebida),
		CardapioController.atualizaCardapio
	)
	.delete('/cardapios/:id', CardapioController.deletaCardapio);

module.exports = router;
