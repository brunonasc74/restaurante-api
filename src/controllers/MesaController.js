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

   //post - cria uma nova reserva
static async criaReserva(req, res) {
    const novaReserva = req.body
    try {
        const novaReservaCriada  = 
        await database.Mesas.create(novaReserva);
        return res.status(201).json(novaReservaCriada);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

//put - atualiza uma reservar
static async atualizaReserva(req, res) {
    const { id } = req.params;
    try {
        const novasInfo = await req.body;
        await database.Clientes.update(novasInfo, { where: { id: +id } });
        // retorna reserva editada caso exista. Se não, retorna uma mensagem de erro
        const reservaAtualizada = await database.Mesas.findOne({ where: { id: +id } });
        if (!reservaAtualizada) return res.status(404).send(`Reserva de id ${id} não existe`);
        return res.status(200).send(`Reserva de id ${id} atualizada com sucesso`);
    } catch (err) {
        res.status(500).send(err);
    }
}
}

module.exports = MesaController;