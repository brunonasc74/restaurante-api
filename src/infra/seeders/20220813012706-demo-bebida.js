'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Bebidas',
			[
				{
					nome: 'Guaraná Mineiro',
					categoria: 'Refrigerante',
					descricao: 'Deliciosa bebida refrescante',
					imagem:
						'https://cdn.discordapp.com/attachments/988224567619244072/1006794688520519740/guarana-mineiro.jpeg',
					porcao: '2 litros',
					preco: 8.0,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nome: 'Coca-Cola',
					categoria: 'Refrigerante',
					descricao: 'Deliciosa bebida refrescante',
					imagem:
						'https://cdn.discordapp.com/attachments/988224567619244072/1006794864547074099/coca-cola.webp',
					porcao: '2 litros',
					preco: 7.0,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nome: 'Água de Coco',
					categoria: 'Bebida tropical',
					descricao: 'Água fresca direta do coco',
					imagem:
						'https://cdn.discordapp.com/attachments/988224567619244072/1006795031593615490/agua-de-coco.jpg',
					porcao: '500 ml',
					preco: 7.0,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nome: 'Suco de laranja',
					categoria: 'Suco',
					descricao: 'Suco natural de laranja',
					imagem:
						'https://cdn.discordapp.com/attachments/988224567619244072/1006795177739948082/suco-de-laranja.jpg',
					porcao: '500 ml',
					preco: 5.0,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nome: 'Caipirinha',
					categoria: 'Bebida alcólica',
					descricao: 'Proibido para menores',
					imagem:
						'https://cdn.discordapp.com/attachments/988224567619244072/1006795627591639050/caipirinha.webp',
					porcao: '500 ml',
					preco: 20.0,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Bebidas', null, {});
	},
};
