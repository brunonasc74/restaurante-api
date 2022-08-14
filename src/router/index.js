const clientes = require('./clientesRoute');
const cardapios = require('./cardapiosRoute');
const bebidas = require('./bebidasRoute');
const pedidos = require('./pedidosRoute');
const mesas = require('./mesasRoute');

module.exports = (app) => {
	app.use(clientes);
	app.use(cardapios);
	app.use(bebidas);
	app.use(pedidos);
	app.use(mesas);
};
