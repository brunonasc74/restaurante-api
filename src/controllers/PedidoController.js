const database = require('../models');

class PedidoController {
	static async pegaTodosPedidos(req, res) {
		try {
			const todosPedidos = await database.Pedidos.findAll();
			return res.status(200).json(todosPedidos);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}

	static async pegaUmPedido(req, res) {
		const { id } = req.params;
		try {
			const umPedido = await database.Pedidos.findOne({
				where: { id: Number(id) },
			});
			return res.status(200).json(umPedido);
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
	static async criaPedido(req, res) {
		const novoPedido = req.body;
		try {
			const novoPedidoCriado = await database.Pedidos.create(novoPedido);
			return res.status(201).json(novoPedidoCriado);
		} catch (error) {
			res.status(500).send(error.message);
		}
	}
	static async atualizaPedido(req, res) {
		const { id } = req.params;
		try {
			const novasInfo = await req.body;
			await database.Pedidos.update(novasInfo, { where: { id: +id } });
			const pedidoAtualizado = await database.Pedidos.findOne({
				where: { id: +id },
			});
			if (!pedidoAtualizado) return res.status(404).send(`Pedido de id ${id} não existe`);
			return res.status(200).send(`Pedido de id ${id} atualizado com sucesso`);
		} catch (err) {
			res.status(500).send(err);
		}
	}
	static async apagaPedido(req, res) {
		const { id } = req.params;
		try {
			await database.Pedidos.destroy({ where: { id: Number(id) } });
			return res.status(200).json({ mensagem: `id ${id} deletado` });
		} catch (error) {
			return res.status(500).json(error.message);
		}
	}
}

module.exports = PedidoController;
