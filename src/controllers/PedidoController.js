const database = require('../models');

class PedidoController {
  	// get - retorna todos os clientes
   static async pegaTodosPedidos(req, res) {
     try {
        const todosPedidos = await database.Pedidos.findAll();
        return res.status(200).json(todosPedidos);
     } catch (error) {
       return res.status(500).json(error.message);
     }
   }

   static async pegaUmPedido(req, res) {
    const {id} = req.params
    try {
       const umPedido = await database.Pedidos.findOne({where: {id:Number(id) }});
       return res.status(200).json(umPedido);
    } catch (error) {
      return res.status(500).json(error.message);
    }
   }

  
}

module.exports = PedidoController;