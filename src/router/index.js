const clientes = require('./clientesRoute');
const cardapios = require('./cardapiosRoute');
const pedidos = require('./pedidosRoute');
const mesas = require('./mesasRoute');
const bebidas = require('./bebidasRoute');

module.exports = (app) => {
	app.use(clientes);
	app.use(cardapios);
	app.use(pedidos);
	app.use(mesas);
	app.use(bebidas);
};
