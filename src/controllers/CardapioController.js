const database = require('../models');

class CardapioController {
    static async pegaTodosCardapios(_, res) {
        try {
            const todosCardapios = await database.Cardapios.findAll();
            return res.status(200).send(todosCardapios);
        } catch (err) {
            res.status(500).send(err);
        }
    }
    static async pegaUmCardapio(req, res) {
        const { id } = req.params;
        try {
            const umCardapio = await database.Cardapios.findOne({ where: { id: +id } });
            if (!umCardapio) return res.status(404).send(`Cardapio de id ${id} não existe`);
            return res.status(200).send(umCardapio);
        }
        catch (err) {
            res.status(500).send(err);
        }
    }
}

