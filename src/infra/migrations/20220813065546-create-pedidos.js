'use strict';
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Pedidos', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			cliente_id: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: { model: 'Clientes', key: 'id' },
			},
			cardapio_id: {
				type: Sequelize.INTEGER,
				references: { model: 'Cardapios', key: 'id' },
			},
			bebida_id: {
				type: Sequelize.INTEGER,
				references: { model: 'Bebidas', key: 'id' },
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Pedidos');
	},
};
