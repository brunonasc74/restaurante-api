'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Cardapios',
			[
				{
					nome: 'Bolo de rolo',
					categoria: 'sobremesas',
					descricao:
						'O bolo de rolo é típico de Pernambuco. É como se fosse um rocambole, que tem origem na Suíça. Mas a semelhança é apenas no formato, porque a de massa do bolo de rolo é fininha e o recheio é de goiabada.',
					imagem:
						'https://www.penaestrada.blog.br/wp-content/uploads/2021/02/comidas-tipicas-do-brasil-bolo-de-rolo.jpg.webp',
					preco: 20.0,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					nome: 'Bolinho de chuva',
					categoria: 'sobremesas',
					descricao:
						'Quem não cresceu comendo bolinho de chuva preparado pela avó, hein? Feito com farinha de trigo, é, geralmente, servido no café da tarde. Coberto com uma camada de açúcar e canela, combina perfeitamente com os dias mais chuvosos.',
					imagem:
						'https://www.penaestrada.blog.br/wp-content/uploads/2021/02/comidas-tipicas-do-brasil-bolinho-de-chuva.jpg.webp',
					preco: 15.0,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					nome: 'Brigadeiro',
					categoria: 'sobremesas',
					descricao:
						'Tipicamente brasileiro, esse docinho de chocolate nasceu na Região Sudeste, mas se espalhou rapidamente pelo país se tornando indispensável nas festas de aniversário, junto dos coadjuvantes beijinho, feito com coco, e cajuzinho, feito com amendoim.',
					imagem:
						'https://www.penaestrada.blog.br/wp-content/uploads/2021/02/comidas-tipicas-do-brasil-brigadeiro.jpg.webp',
					preco: 18.0,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					nome: 'Caldo de piranha',
					categoria: 'centroOeste',
					descricao:
						'Feito com o peixe piranha, esse caldo é servido na Região Centro-Oeste, especialmente na área do Pantanal.',
					imagem:
						'https://brunaxavier.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3cc26af7-ff69-4f39-b39a-fdad61c268c4%2FUntitled.png?table=block&id=abcc533e-bc93-48b4-bb96-2fea1770d1e7&spaceId=b7325d22-32aa-4fc8-96b8-823cede58c3d&width=1000&userId=&cache=v2',
					preco: 79.0,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					nome: 'Arroz com pequi',
					categoria: 'centroOeste',
					descricao:
						'Típico de Goiás. O fruto, que tem um gosto marcante e esconde perigosos espinhos no miolo, é controverso para quem não é “do Goiás“. Mas, não há como negar que o arroz com pequi reina absoluto na mesa dos goianos.',
					imagem:
						'https://brunaxavier.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F442bc3a6-7e17-454b-b61f-7ee357de1c02%2FUntitled.png?table=block&id=ef0e2780-e31c-4d94-8019-6df6d81bfe4a&spaceId=b7325d22-32aa-4fc8-96b8-823cede58c3d&width=1000&userId=&cache=v2',
					preco: 54.0,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					nome: 'Empamonado',
					categoria: 'centroOeste',
					descricao:
						'O feijão empamonado é um prato típico da região de Coxim, no Mato Grosso do Sul. A receita coxinense leva carne, pimenta à vontade e um toque de trigo, além de feijão e temperos.',
					imagem:
						'https://brunaxavier.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fba250f87-4cf2-4db2-bde4-9e88d76a9a46%2FUntitled.png?table=block&id=752b830e-bcd4-4542-ad64-40537f5cf587&spaceId=b7325d22-32aa-4fc8-96b8-823cede58c3d&width=1000&userId=&cache=v2',
					preco: 50.0,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					nome: 'Pato no tucupi',
					categoria: 'norte',
					descricao:
						'O pato no tucupi é típico Região Norte, especialmente do Pará. É feito com tucupi, líquido de cor amarela extraído da raiz da mandioca brava, e com jambu, erva famosa por dar uma leve sensação de dormência na língua.',
					imagem:
						'https://brunaxavier.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fad049e00-c1f2-40c4-93d8-bd603fbf6f15%2FUntitled.png?table=block&id=2339af71-e11b-42dd-854e-27d0f0c3baa4&spaceId=b7325d22-32aa-4fc8-96b8-823cede58c3d&width=1000&userId=&cache=v2',
					preco: 89.0,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					nome: 'Filé de tucunaré',
					categoria: 'norte',
					descricao:
						'No norte do Brasil, o que não falta é água. Por causa dos imensos rios, o consumo de peixe é muito grande entre a população. E o que ganha destaque é o tucunaré, que é o ingrediente principal de um dos pratos típicos mais populares da região.',
					imagem:
						'https://brunaxavier.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa48ae712-9f04-4457-845b-b15f1ce3e822%2FUntitled.png?table=block&id=78a67676-b58f-417c-a73b-08a8d43794e3&spaceId=b7325d22-32aa-4fc8-96b8-823cede58c3d&width=1000&userId=&cache=v2',
					preco: 86.0,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					nome: 'Camarão no bafo',
					categoria: 'norte',
					descricao:
						'Muito comum entre as famílias do Amapá, o camarão no bafo tem um preparo fácil e prático, herança dos indígenas que sabem muito bem aproveitar o que têm para criar receitas simples e deliciosas.',
					imagem:
						'https://www.penaestrada.blog.br/wp-content/uploads/2021/02/comidas-tipicas-do-brasil-camara-no-bafo.jpg.webp',
					preco: 92.0,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					nome: 'Baião de dois',
					categoria: 'nordeste',
					descricao:
						'Muito consumido em vários estados do Nordeste, o baião de dois sempre aparece nas refeições do dia a dia. É uma mistura saborosíssima de arroz com feijão-verde que ganha novos ingredientes de acordo com a região, mas a base é sempre a mesma.',
					imagem:
						'https://brunaxavier.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5bd627c8-54da-4011-bc0d-552d371a6d47%2FUntitled.png?table=block&id=f20e54c8-2f98-4b1f-bbb6-68bb1acd7b1d&spaceId=b7325d22-32aa-4fc8-96b8-823cede58c3d&width=1000&userId=&cache=v2',
					preco: 86.0,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					nome: 'Bobó de camarão',
					categoria: 'nordeste',
					descricao:
						'Bobó de camarão tem origem africana, assim com muitos outros pratos da Bahia, e é, basicamente, um purê de mandioca com camarão temperados com tudo que é bom.',
					imagem:
						'https://brunaxavier.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff473b92f-2ca5-4899-9e6f-47fa4cc9159b%2FUntitled.png?table=block&id=ba1e3125-457f-45a5-98f0-7922b2cab1ee&spaceId=b7325d22-32aa-4fc8-96b8-823cede58c3d&width=1000&userId=&cache=v2',
					preco: 79.0,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					nome: 'Barreado',
					categoria: 'sul',
					descricao:
						'O barreado é um prato típico do Paraná. É uma iguaria feita à base de carne bovina cozida com condimentos, utilizando tradicionalmente como recipiente uma panela de barro hermeticamente fechada com goma de farinha de mandioca. Além disso, no seu preparo são utilizados também cebola, alho, sal e pimenta a gosto, bacon, cominho e louro.',
					imagem:
						'https://brunaxavier.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F59a7d6c0-db4d-440e-80d4-62c50e90615f%2FUntitled.png?table=block&id=6b81abd4-46dd-4584-b75c-82a5d52db308&spaceId=b7325d22-32aa-4fc8-96b8-823cede58c3d&width=1000&userId=&cache=v2',
					preco: 58.0,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					nome: 'Arroz Carreteiro',
					categoria: 'sul',
					descricao:
						'O arroz carreteiro surgiu nos pampas do Rio Grande do Sul. É composto de uma mistura de arroz e charque, semelhante à carne seca.',
					imagem:
						'https://brunaxavier.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F80205c12-85d7-47f2-a021-d15ca34f83fa%2FUntitled.png?table=block&id=a581188b-96f1-40cf-978a-d7e606f8e07e&spaceId=b7325d22-32aa-4fc8-96b8-823cede58c3d&width=1000&userId=&cache=v2',
					preco: 68.0,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					nome: 'Tutu de feijão',
					categoria: 'sudeste',
					descricao:
						'É feito com feijão cozido, refogado e, depois moído, e engrossado com farinha de mandioca ou de milho. Ele costuma ser incrementado com pedaços de bacon frito, cebola e alho. É normalmente associado à culinária típica de Minas Gerais e de São Paulo, porém, também pode ser encontrado nas cidades interioranas do estado do Rio de Janeiro',
					imagem:
						'https://www.penaestrada.blog.br/wp-content/uploads/2021/02/comidas-tipicas-do-brasil-tutu-de-feijao-1.jpg.webp',
					preco: 48.0,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					nome: 'Vaca atolada',
					categoria: 'sudeste',
					descricao:
						'A vaca atolada é um prato típico da comida caipira a base de carne bovina. Tem como principais ingredientes a costela bovina e a mandioca. É muito popular nos estados de São Paulo, Rio de Janeiro, Minas Gerais.',
					imagem:
						'https://brunaxavier.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8226af87-ff86-4d27-a6ab-151554729107%2FUntitled.png?table=block&id=fab7e6b6-08f9-46ac-a2d2-444b59b9b455&spaceId=b7325d22-32aa-4fc8-96b8-823cede58c3d&width=1000&userId=&cache=v2',
					preco: 70.0,
					createdAt: new Date(),
					updatedAt: new Date()
				},
				{
					nome: 'Feijão tropeiro',
					categoria: 'sudeste',
					descricao:
						'O feijão tropeiro é associado às culinárias típicas dos estados de estados como o Goiás. O nome remete aos tropeiros, homens que cumpriam a estratégia dos portugueses para integrar povoados das regiões Sudeste e Centro-Oeste.',
					imagem:
						'https://brunaxavier.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff36eecb1-cbda-42ae-b2f6-6f03fe8622ff%2FUntitled.png?table=block&id=6bcdb336-d18d-4e1b-9669-963320b1d431&spaceId=b7325d22-32aa-4fc8-96b8-823cede58c3d&width=1000&userId=&cache=v2',
					preco: 68.0,
					createdAt: new Date(),
					updatedAt: new Date()
				}
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Cardapios', null, {});
	}
};
