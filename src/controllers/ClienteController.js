const database = require('../models');

class ClienteController {
	// get - pega todos os clientes e os retorna
	static async pegaTodosClientes(_, res) {
		try {
			const todosClientes = await database.Clientes.findAll();
			return res.status(200).send(todosClientes);
		} catch (err) {
			res.status(400).send(err.message);
		}
	}

	// get - retorna um unico cliente
	static async pegaUmCliente(req, res) {
		const { id } = req.params;
		try {
			const umCliente = await database.Clientes.findOne({ where: { id: +id } });
			// retorna mensagem de erro caso id de cliente não exista
			if (!umCliente) return res.status(404).send(`Cliente de id ${id} não existe`);
			return res.status(200).send(umCliente);
		} catch (err) {
			res.status(400).send(err.message);
		}
	}

	// post - cria um novo cliente
	static async criaCliente(req, res) {
		try {
			const umCliente = req.body;
			await database.Clientes.create(umCliente);
			return res.status(201).send('Cliente adicionado com sucesso');
		} catch (err) {
			res.status(400).send(err.message);
		}
	}

	// put - edita um cliente
	static async editaCliente(req, res) {
		const { id } = req.params;
		try {
			const novasInfo = await req.body;
			await database.Clientes.update(novasInfo, { where: { id: +id } });
			// retorna cliente editado caso exista, se não retorna uma mensagem de erro
			const clienteEditado = await database.Clientes.findOne({ where: { id: +id } });
			if (!clienteEditado) return res.status(404).send(`Cliente de id ${id} não existe`);
			return res.status(200).send(`Cliente de id ${id} atualizado com sucesso`);
		} catch (err) {
			res.status(400).send(err.message);
		}
	}

	// delete - apaga cliente da tabela
	static async apagaCliente(req, res) {
		const { id } = req.params;
		try {
			// verificação se id selecionado existe em cliente
			const umCliente = await database.Clientes.findOne({ where: { id: +id } });
			if (!umCliente) return res.status(404).send(`Cliente de id ${id} não existe`);
			// apagar id selecionado
			await database.Pedidos.destroy({ where: { cliente_id: +id } });
			await database.Clientes.destroy({ where: { id: +id } });
			return res.status(200).send(`Cliente ${umCliente.nome} de id ${id} apagado com sucesso`);
		} catch (err) {
			res.status(400).send(err.message);
		}
	}

	// pega todos os pedidos de determinado cliente
	static async pegaPedidosDeCliente(req, res) {
		const { id } = req.params;
		try {
			const pedidosDeCliente = await database.Pedidos.findAll({ where: { cliente_id: +id } });
			return res.status(200).send(pedidosDeCliente);
		} catch (err) {
			res.status(400).send(err.message);
		}
	}

	// apaga todos os pedidos de determinado cliente
	static async apagaPedidosDeCliente(req, res) {
		const { id } = req.params;
		try {
			// verificação se id selecionado existe em cliente
			const umCliente = await database.Clientes.findOne({ where: { id: +id } });
			if (!umCliente) return res.status(404).send(`Pedido de id ${id} não existe`);
			// apagar id's selecionado
			await database.Pedidos.destroy({ where: { cliente_id: +id } });
			return res.status(200).send(`Pedidos de ${umCliente.nome} apagados com sucesso`);
		} catch (err) {
			res.status(400).send(err.message);
		}
	}
}

module.exports = ClienteController;
