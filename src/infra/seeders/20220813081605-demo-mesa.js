'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Mesas',
			[
				{
					reserva: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					reserva: 0,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					reserva: 0,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					reserva: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					reserva: 0,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Mesas', null, {});
	},
};
