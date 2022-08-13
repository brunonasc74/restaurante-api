const { Router } = require('express');
const MesaController = require('../controllers/MesaController');


const router = Router();

router.get('/mesas', MesaController.pegaTodasMesas);
router.get('/mesas/:id', MesaController.pegaUmaMesa);

module.exports = router;