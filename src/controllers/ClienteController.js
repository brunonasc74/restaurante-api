const database = require('../models');

class ClienteController {
	static async pegaTodosClientes(_, res) {
		try {
			const todosClientes = await database.Clientes.findAll();
			return res.status(200).send(todosClientes);
		} catch (err) {
			res.status(500).send(err);
		}
	}

	static async pegaUmCliente(req, res) {
		const { id } = req.params;
		try {
			const umCliente = await database.Clientes.findOne({ where: { id: +id } });
			return res.status(200).send(umCliente);
		} catch (err) {
			res.status(500).send(err);
		}
	}

	static async criaCliente(req, res) {
		try {
			const umCliente = req.body;
			await database.Clientes.create(umCliente);
			return res.status(201).send('Cliente adicionado com sucesso');
		} catch (err) {
			res.status(500).send(err);
		}
	}

	static async editaCliente(req, res) {
		const { id } = req.params;
		try {
			const novasInfo = await req.body;
			await database.Clientes.update(novasInfo, { where: { id: +id } });
			const clienteEditado = await database.Clientes.findOne({ where: { id: +id } });
			return res.status(200).send(clienteEditado);
		} catch (err) {
			res.status(500).send(err);
		}
	}

	static async apagaCliente(req, res) {
		const { id } = req.params;
		try {
			await database.Clientes.destroy({ where: { id: +id } });
			return res.status(200).send(`Cliente de id ${id} apagado com sucesso`);
		} catch (err) {
			res.status(500).send(err);
		}
	}
}

module.exports = ClienteController;
