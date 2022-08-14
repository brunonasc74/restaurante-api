const CardapioController = require("../controllers/CardapioController");
const { Router } = require("express");
const route = Router();

route
  .get("/cardapios", CardapioController.pegaTodosCardapios)
  .get("/cardapios/:id", CardapioController.pegaUmCardapio)
  .post("/cardapios", CardapioController.criaCardapio)
  .put("/cardapios/:id", CardapioController.atualizaCardapio)
  .delete("/cardapios/:id", CardapioController.deletaCardapio);

module.exports = route;
