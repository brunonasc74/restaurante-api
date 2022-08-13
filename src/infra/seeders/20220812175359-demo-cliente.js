'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Clientes',
			[
				{
					nome: 'Bruna',
					sobrenome: 'Xavier',
					email: 'brunaxavier@email.com',
					telefone: '(21)91111-1111',
					cpf: '111.111.111-11',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nome: 'Bruno',
					sobrenome: 'Nascimento',
					email: 'bruno_nascimento@email.com',
					telefone: '(34)92222-2222',
					cpf: '222.222.222-22',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nome: 'Shiellyn',
					sobrenome: 'Ferreira',
					email: 'shi.barraqueira@email.com',
					telefone: '(11)93333-3333',
					cpf: '333.333.333-33',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nome: 'Kelly',
					sobrenome: 'Alves',
					email: 'alves.kelly@email.com',
					telefone: '(71)94444-4444',
					cpf: '444.444.444-44',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nome: 'Artur',
					sobrenome: 'Rodrigues',
					email: 'rod_artur@email.com',
					telefone: '(38)95555-5555',
					cpf: '555.555.555-55',
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Clientes', null, {});
	},
};
