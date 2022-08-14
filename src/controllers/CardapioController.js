const database = require("../models");

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
      const umCardapio = await database.Cardapios.findOne({
        where: { id: +id },
      });
      if (!umCardapio)
        return res.status(404).send(`Cardapio de id ${id} não encontrado`);
      return res.status(200).send(umCardapio);
    } catch (err) {
      res.status(500).send(err);
    }
  }
  static async criaCardapio(req, res) {
    const { nome, descricao, preco } = req.body;
    try {
      const novoCardapio = await database.Cardapios.create({
        nome,
        descricao,
        preco,
      });
      return res.status(201).send(novoCardapio);
    } catch (err) {
      res.status(500).send(err);
    }
  }
  static async atualizaCardapio(req, res) {
    const { id } = req.params;
    const { nome, descricao, preco } = req.body;
    try {
      const cardapioAtualizado = await database.Cardapios.update(
        { nome, descricao, preco },
        { where: { id: +id } }
      );
      if (!cardapioAtualizado)
        return res
          .status(404)
          .send(`Cardapio de id ${id} atualizado com sucesso`);
      return res.status(200).send(cardapioAtualizado);
    } catch (err) {
      res.status(500).send(err);
    }
  }
  static async deletaCardapio(req, res) {
    const { id } = req.params;
    try {
      const cardapioDeletado = await database.Cardapios.destroy({
        where: { id: +id },
      });
      if (!cardapioDeletado)
        return res
          .status(404)
          .send(`Cardapio de id ${id} deletado com sucesso`);
      return res.status(200).send(cardapioDeletado);
    } catch (err) {
      res.status(500).send(err);
    }
  }
}

module.exports = CardapioController;
