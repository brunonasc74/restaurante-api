const database = require('../models');

class PedidoController {
	// get - retorna todos os clientes
	static async pegaTodosPedidos(req, res) {
		try {
			const todosPedidos = await database.Pedidos.findAll();
			return res.status(200).send(todosPedidos);
		} catch (error) {
			res.status(400).send(error.message);
		}
	}

	// get - retorna um pedido
	static async pegaUmPedido(req, res) {
		const { id } = req.params;
		try {
			const umPedido = await database.Pedidos.findOne({ where: { id: Number(id) } });
			return res.status(200).send(umPedido);
		} catch (error) {
			res.status(400).send(error.message);
		}
	}

	// post - Cadastra um novo pedido
	static async cadastraPedido(req, res) {
		const novoPedido = req.body;
		try {
			const novoPedidoCriado = await database.Pedidos.create(novoPedido);
			return res.status(201).send(novoPedidoCriado);
		} catch (error) {
			res.status(400).send(error.message);
		}
	}

	//Put - Atualiza um pedido
	static async atualizaPedido(req, res) {
		const { id } = req.params;
		const pedidoAtualizado = req.body;
		try {
			await database.Pedidos.update(pedidoAtualizado, { where: { id: Number(id) } });
			return res.status(200).send(pedidoAtualizado);
		} catch (error) {
			res.status(400).send(`Não foi possivel atualizar o pedido: ${error.message}`);
		}
	}

	//Delete - Deleta um pedido
	static async deletaPedido(req, res) {
		const { id } = req.params;
		try {
			const umPedido = await database.Pedidos.findOne({ where: { id: +id } });
			if (!umPedido) return res.status(404).send(`Pedido de id ${id} não existe`);
			const cliente = await database.Clientes.findOne({ where: { id: +id } });
			await database.Pedidos.destroy({ where: { id: Number(id) } });
			return res
				.status(200)
				.send(`mensagem: O pedido id ${id} de ${cliente.nome} foi deletado com suceso`);
		} catch (error) {
			res.status(400).send(error.message);
		}
	}
}

module.exports = PedidoController;
