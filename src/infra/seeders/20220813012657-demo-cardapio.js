'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Cardapios',
			[
				{
					nome: 'Pão de queijo',
					categoria: 'Comida regional',
					descricao: 'Massa de polvilho e queijo, diretamente de Minas',
					imagem:
						'https://cdn.discordapp.com/attachments/988224567619244072/1006791890265448468/pao-de-queijo.jpeg',
					porcao: '6 unidades',
					preco: 7.0,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nome: 'Acarajé',
					categoria: 'Comida regional',
					descricao: 'Bolinho de feijão fradinho, recheado com vatapá, vinagrete e camarão',
					imagem:
						'https://cdn.discordapp.com/attachments/988224567619244072/1007823744997281883/unknown.png',
					porcao: '500 gramas',
					preco: 22.0,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nome: 'Almôndegas ao molho',
					categoria: 'Comida casual',
					descricao: 'Deliciosas almôndegas com molho à escolha',
					imagem:
						'https://cdn.discordapp.com/attachments/988224567619244072/1006791889242050611/almondega.jpg',
					porcao: '500 gramas',
					preco: 25.0,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nome: 'Risotto ao camarão',
					categoria: 'Comida italiana',
					descricao: 'Arroz arbóreo ao molho com camarão',
					imagem:
						'https://cdn.discordapp.com/attachments/988224567619244072/1006791889892151327/risoto-de-camarao.jpg',
					porcao: '400 gramas',
					preco: 68.0,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					nome: 'Filet Mignon ao molho madeira',
					categoria: 'Comida de rico',
					descricao: 'Carne nobre com preço exorbitante',
					imagem:
						'https://cdn.discordapp.com/attachments/988224567619244072/1006791889573396480/file-mignon-ao-molho-madeira.jpg',
					porcao: '250 gramas',
					preco: 97.0,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Cardapios', null, {});
	},
};
