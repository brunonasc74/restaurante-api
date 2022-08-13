'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Pedidos',
			[
				{
					cliente_id: 2,
					cardapio_id: 1,
					bebida_id: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					cliente_id: 3,
					cardapio_id: 2,
					bebida_id: 5,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					cliente_id: 1,
					cardapio_id: 4,
					bebida_id: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					cliente_id: 5,
					cardapio_id: 1,
					bebida_id: 3,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					cliente_id: 4,
					cardapio_id: 3,
					bebida_id: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					cliente_id: 2,
					cardapio_id: null,
					bebida_id: 4,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Pedidos', null, {});
	},
};
