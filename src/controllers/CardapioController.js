const database = require('../models');

class CardapioController {
	static async pegaTodosCardapios(_, res) {
		try {
			const todosCardapios = await database.Cardapios.findAll();
			return res.status(200).send(todosCardapios);
		} catch (err) {
			res.status(400).send(err.message);
		}
	}
	static async pegaUmCardapio(req, res) {
		const { id } = req.params;
		try {
			const umCardapio = await database.Cardapios.findOne({
				where: { id: +id }
			});
			if (!umCardapio)
				return res.status(404).send(`Cardapio de id ${id} não encontrado`);
			return res.status(200).send(umCardapio);
		} catch (err) {
			res.status(400).send(err.message);
		}
	}
	static async pegaCategoria(req, res) {
		const { categoria } = req.params;
		try {
			const umaCategoria = await database.Cardapios.findAll({
				where: { categoria: categoria }
			});
			if (!umaCategoria)
				return res
					.status(404)
					.send(`Cardapio de categoria ${categoria} não encontrado`);
			return res.status(200).send(umaCategoria);
		} catch (err) {
			res.status(400).send(err.message);
		}
	}
	static async criaCardapio(req, res) {
		const novoCardapio = req.body;
		try {
			const novoCardapioCriado = await database.Cardapios.create(novoCardapio);
			return res.status(201).send(novoCardapioCriado);
		} catch (err) {
			res.status(400).send(err.message);
		}
	}
	static async atualizaCardapio(req, res) {
		const { id } = req.params;
		try {
			const novasInfo = await req.body;
			await database.Cardapios.update(novasInfo, { where: { id: +id } });
			const cardapioAtualizado = await database.Cardapios.findOne({
				where: { id: +id }
			});
			if (!cardapioAtualizado)
				return res.status(404).send(`Cardapio de id ${id} não existe`);
			return res.status(200).send(`Cardápio de id ${id} atualizado`);
		} catch (err) {
			res.status(400).send(err.message);
		}
	}
	static async deletaCardapio(req, res) {
		const { id } = req.params;
		try {
			const umCardapio = await database.Cardapios.findOne({
				where: { id: +id }
			});
			if (!umCardapio)
				return res.status(404).send(`Cardapio de id ${id} não existe`);
			await database.Pedidos.update(
				{ cardapio_id: null },
				{ where: { cardapio_id: +id } }
			);
			await database.Cardapios.destroy({ where: { id: +id } });
			return res.status(200).send(`Cardápio de id ${id} deletado com sucesso`);
		} catch (err) {
			res.status(400).send(err.message);
		}
	}
}

module.exports = CardapioController;
