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

   // get - retorna um pedido
   static async pegaUmPedido(req, res) {
    const {id} = req.params
    try {
       const umPedido = await database.Pedidos.findOne({where: {id:Number(id) }});
       return res.status(200).json(umPedido);
    } catch (error) {
      return res.status(500).json(error.message);
    }
   }

   // post - Cadastra um novo pedido
   static async cadastraPedido(req,res) {
      const novoPedido = req.body;
       try {
           const novoPedidoCriado = await database.Pedidos.create(novoPedido);
           return res.status(201).json(novoPedidoCriado);
       } catch (error) {
        return res.status(500).json(error.message);
       }
   }

   //Put - Atualiza um pedido
   static async atualizaPedido(req, res) {
    const {id} = req.params;
    const pedidoAtualizado = req.body;
     try {
        await database.Pedidos.update(pedidoAtualizado,{where:{id: Number(id) }});
        return res.status(200).json(pedidoAtualizado);
     } catch (error) {
      return res.status(500).json(`Não foi possivel atualizar o pedido: ${error.message}`);
     }
   }

}

module.exports = PedidoController;