const clientes = require('./clientesRoute');
const pedidos = require('./pedidosRoute');
const mesas = require('./mesasRoute');

module.exports = (app) => {
	app.use(clientes);
	app.use(pedidos);
	app.use(mesas);
};
