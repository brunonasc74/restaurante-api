const BebidasController = require("../controllers/bebidasController");
const { Router } = require("express");
const route = Router();

route
  .get("/bebidas", BebidasController.pegaTodasBebidas)
  .get("/bebidas/:id", BebidasController.pegaUmaBebida)
  .post("/bebidas", BebidasController.criaBebida)
  .put("/bebidas/:id", BebidasController.atualizaBebida)
  .delete("/bebidas/:id", BebidasController.deletaBebida);

module.exports = route;
