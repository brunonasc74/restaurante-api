const database = require('../models');

class BebidaController {
	static async pegaTodasBebidas(_, res) {
		try {
			const todasBebidas = await database.Bebidas.findAll();
			return res.status(200).json(todasBebidas);
		} catch (err) {
			res.status(400).json(err.message);
		}
	}
	static async pegaUmaBebida(req, res) {
		const { id } = req.params;
		try {
			const umaBebida = await database.Bebidas.findOne({ where: { id: Number(id) } });
			if (!umaBebida) return res.status(404).send(`Bebida de id ${id} não existe`);
			return res.status(200).json(umaBebida);
		} catch (err) {
			res.status(400).json(err.message);
		}
	}
	static async criaBebida(req, res) {
		const novaBebida = req.body;
		try {
			const novaBebidaCriada = await database.Bebidas.create(novaBebida);
			return res.status(201).json(novaBebidaCriada);
		} catch (err) {
			res.status(400).send(err.message);
		}
	}
	static async atualizaBebida(req, res) {
		const { id } = req.params;
		try {
			const novasInfo = await req.body;
			await database.Bebidas.update(novasInfo, { where: { id: +id } });
			const bebidaAtualizada = await database.Bebidas.findOne({ where: { id: +id } });
			if (!bebidaAtualizada) return res.status(404).send(`Bebida de id ${id} não existe`);
			return res.status(200).send(`Bebida de id ${id} atualizada com sucesso`);
		} catch (err) {
			res.status(400).send(err.message);
		}
	}
	static async apagaBebida(req, res) {
		const { id } = req.params;
		try {
			const umaBebida = await database.Bebidas.findOne({ where: { id: +id } });
			if (!umaBebida) return res.status(404).send(`Bebida de id ${id} não existe`);
			await database.Pedidos.update({ bebida_id: null }, { where: { bebida_id: +id } });
			await database.Bebidas.destroy({ where: { id: +id } });
			return res.status(200).send(`Bebida de id ${id} deletado`);
		} catch (err) {
			res.status(400).send(err.message);
		}
	}
}

module.exports = BebidaController;
