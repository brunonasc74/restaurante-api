const database = require('../models');

class ClienteController {
	// get - pega todos os clientes e os retorna
	static async pegaTodosClientes(_, res) {
		try {
			const todosClientes = await database.Clientes.findAll();
			return res.status(200).send(todosClientes);
		} catch (err) {
			res.status(500).send(err);
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
			res.status(500).send(err);
		}
	}

	// post - cria um novo cliente
	static async criaCliente(req, res) {
		try {
			const umCliente = req.body;
			await database.Clientes.create(umCliente);
			return res.status(201).send('Cliente adicionado com sucesso');
		} catch (err) {
			res.status(500).send(err);
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
			res.status(500).send(err);
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
			await database.Clientes.destroy({ where: { id: +id } });
			return res.status(200).send(`${umCliente.nome} de id ${id} apagado com sucesso`);
		} catch (err) {
			res.status(500).send(err);
		}
	}
}

module.exports = ClienteController;
