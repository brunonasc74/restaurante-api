const { Router } = require('express');
const BebidasController = require('../controllers/BebidasController');


const router = Router();

router.get('/bebidas', BebidasController.pegaTodasBebidas);
router.get('/bebidas/:id', BebidasController.pegaUmaBebidas);
router.post('/bebidas', BebidasController.criaBebida);
router.put('/bebidas/:id', BebidasController.atualizaBebida);
router.delete('/bebidas/:id', BebidasController.deletaBebida);

module.exports = router;