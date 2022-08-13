'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Pedidos extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Pedidos.belongsTo(models.Clientes, { foreignKey: 'cliente_id' });
			Pedidos.belongsTo(models.Cardapios, { foreignKey: 'cardapio_id' });
			Pedidos.belongsTo(models.Bebidas, { foreignKey: 'bebida_id' });
		}
	}
	Pedidos.init(
		{},
		{
			sequelize,
			modelName: 'Pedidos',
		}
	);
	return Pedidos;
};
