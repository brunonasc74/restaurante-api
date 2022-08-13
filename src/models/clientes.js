'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Clientes extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			Clientes.hasMany(models.Pedidos, { foreignKey: 'cliente_id' });
		}
	}
	Clientes.init(
		{
			nome: DataTypes.STRING,
			sobrenome: DataTypes.STRING,
			email: DataTypes.STRING,
			telefone: DataTypes.STRING,
			cpf: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Clientes',
		}
	);
	return Clientes;
};
