const database = require('../models');

class BebidaController {
	static async pegaTodasBebidas(_, res) {
		try {
			const todasBebidas = await database.Bebidas.findAll();
			return res.status(200).json(todasBebidas);
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}
	static async pegaUmaBebida(req, res) {
		const { id } = req.params;
		try {
			const umaBebida = await database.Bebidas.findOne({ where: { id: Number(id) } });
			return res.status(200).json(umaBebida);
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}
	static async criaBebida(req, res) {
		const novaBebida = req.body;
		try {
			const novaBebidaCriada = await database.Bebidas.create(novaBebida);
			return res.status(201).json(novaBebidaCriada);
		} catch (err) {
			res.status(500).send(err.message);
		}
	}
	static async atualizaBebida(req, res) {
		const { id } = req.params;
		try {
			const novasInfo = await req.body;
			await database.Bebidas.update(novasInfo, { where: { id: +id } });
			const bebidaAtualizada = await database.Bebidas.findOne({ where: { id: +id } });
			if (!bebidaAtualizada) return res.status(404).send(`Reserva de id ${id} não existe`);
			return res.status(200).send(`Reserva de id ${id} atualizada com sucesso`);
		} catch (err) {
			res.status(500).send(err.message);
		}
	}
	static async apagaBebida(req, res) {
		const { id } = req.params;
		try {
			await database.Bebidas.destroy({ where: { id: Number(id) } });
			return res.status(200).json({ mensagem: `id ${id} deletado` });
		} catch (err) {
			return res.status(500).json(err.message);
		}
	}
}

module.exports = BebidaController;
