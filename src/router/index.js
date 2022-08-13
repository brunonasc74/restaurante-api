const clientes = require('./clientesRoute');

module.exports = (app) => {
	app.use(clientes);
};
