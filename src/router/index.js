const clientes = require('./clientesRoute');
const pedidos = require('./pedidosRoute');

module.exports = (app) => {
	app.use(clientes);
	app.use(pedidos);
};
