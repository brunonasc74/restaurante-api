const database = require('../models');

class BebidasController {
  static async pegaTodasBebidas(req,res) {
    try {
      const todasBebidas = await database.Bebidas.findAll();
      return res.status(200).send(todosCardapios);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  static async pegaUmaBebida(req, res){
    const { id } = req.params;
    try{
      const umaBebida = await database.Bebidas.findOne({
        where: { id: +id},
      });
      if (!umaBebida)
        return res.status(404).send(`Cardapio de id ${id} não encontrado`);
      return res.status(200).send(umaBebida);
    } catch (err) {
      res.status(500).send(err);
    }
  }
  static async criaBebida(req, res) {
    const { nome, descricao, preco } = req.body;
    try {
      const novaBebida = await database.Bebidas.create({
        nome,
        descricao,
        preco,
      });
      return res.status(201).send(novaBebida);
    } catch (err) {
      res.status(500).send(err);
    }
  }
  static async atualizaBebida(req, res) {
    const { id } = req.params;
    const { nome, descricao, preco } = req.body;
    try {
      const BebidaAtualizada = await database.Bebidas.update(
        { nome, descricao, preco },
        { where: { id: +id } }
      );
      if (!BebidaAtualizada)
        return res
          .status(404)
          .send(`Bebida de id ${id} não existe`);
      return res.status(200).send(`Bebida de id ${id} atualizado`);
    } catch (err) {
      res.status(500).send(err);
    }
  }
  static async deletaBebida(req, res) {
    const { id } = req.params;
    try {
      const BebidaDeletada = await database.Bebidas.destroy({
        where: { id: +id },
      });
      if (!BebidaDeletada)
        return res
          .status(404)
          .send(`Bebida de id ${id} não existe`);
      return res.status(200).send(`Bebida de id ${id} deletado com sucesso`);
    } catch (err) {
      res.status(500).send(err);
    }
  }
}

module.exports = BebidasController;
