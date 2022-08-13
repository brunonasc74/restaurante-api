'use strict';
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Cardapios', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			nome: {
				type: Sequelize.STRING,
			},
			categoria: {
				type: Sequelize.STRING,
			},
			descricao: {
				type: Sequelize.STRING,
			},
			imagem: {
				type: Sequelize.STRING,
			},
			porcao: {
				type: Sequelize.STRING,
			},
			preco: {
				type: Sequelize.FLOAT,
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
		await queryInterface.dropTable('Cardapios');
	},
};
