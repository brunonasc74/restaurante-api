const clientes = require("./clientesRoute");
const pedidos = require("./pedidosRoute");
const cardapios = require("./cardapiosRoute");

module.exports = (app) => {
  app.use(clientes);
  app.use(pedidos);
  app.use(cardapios);
};
