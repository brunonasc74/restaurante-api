const database = require('../models');

class MesaController {
  	// get - retorna todas as mesas
   static async pegaTodasMesas(req, res) {
     try {
        const todasMesas = await database.Mesas.findAll();
        return res.status(200).json(todasMesas);
     } catch (error) {
       return res.status(500).json(error.message);
     }
   }

    // get - retorna uma unica mesa
   static async pegaUmaMesa(req, res) {
    const {id} = req.params
    try {
       const umaMesa = await database.Mesas.findOne({where: {id:Number(id) }});
       return res.status(200).json(umaMesa);
    } catch (error) {
      return res.status(500).json(error.message)
    }
   }

   //cria uma nova reserva - post
static async criaReserva(req, res) {
    try {
        const novaReserva  = req.body;
        await database.Mesas.create(novaReserva);
        return res.status(201).send('Mesa reservada com sucesso');
    } catch (error) {
        res.status(500).send(error.message);
    }
}
}

module.exports = MesaController;