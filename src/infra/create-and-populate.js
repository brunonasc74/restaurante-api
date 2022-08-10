import sqlite3 from 'sqlite3';
const db = new sqlite3.Database('./database.db');

// Criando e populando schema de clientes

const CLIENTES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CLIENTES" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "Nome" VARCHAR(32),
    "Sobrenome" VARCHAR(32),
    "Email" VARCHAR(64),
    "Telefone" VARCHAR(14),
    "CPF" VARCHAR(14)
)`;

const ADD_CLIENTES_DATA = `
INSERT INTO CLIENTES (ID, NOME, SOBRENOME, EMAIL, TELEFONE, CPF)
VALUES
    (1, 'Bruna',    'Xavier',     'brunaxavier@email.com',       '(21)91111-1111', '111.111.111-11'),
    (2, 'Bruno',    'Nascimento', 'bruno_nascimento@email.com',  '(34)92222-2222', '222.222.222-22'),
    (3, 'Shiellyn', 'Ferreira',   'shiellyn.ferreira@email.com', '(11)93333-3333', '333.333.333-33'),
    (4, 'Kelly',    'Alves',      'alves.kelly@email.com',       '(71)94444-4444', '444.444.444-44'),
    (5, 'Artur',    'Rodrigues',  'rod_artur@email.com',         '(38)95555-5555', '555.555.555-55')`;

function criaTabelaClientes() {
	db.run(CLIENTES_SCHEMA, error => {
		if (error) console.log('Erro ao criar tabela de clientes');
	});
}

function populaTabelaClientes() {
	db.run(ADD_CLIENTES_DATA, error => {
		if (error) console.log('Erro ao popular tabela de clientes');
	});
}

// Criando e populando schema de cardápio

const CARDAPIO_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CARDAPIO" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "Nome" VARCHAR(100),
    "Categoria" VARCHAR(32),
    "Descricao" VARCHAR(200),
    "Imagem" VARCHAR(500),
    "Porcao" VARCHAR(20),
    "Preco" INT
)`;

const ADD_CARDAPIO_DATA = `
INSERT INTO CARDAPIO (ID, NOME, CATEGORIA, DESCRICAO, IMAGEM, PORCAO, PRECO)
VALUES
    (1, 'Pão de queijo',                 'Comida regional', 'Massa de polvilho e queijo, diretamente de Minas',                     
    'https://cdn.discordapp.com/attachments/988224567619244072/1006791890265448468/pao-de-queijo.jpeg', '6 unidades', '8'),
    (2, 'Acarajé',                       'Comida regional', 'Bolinho de feijão fradinho, recheado com vatapá, vinagrete e camarão', 
    'https://cdn.discordapp.com/attachments/988224567619244072/1006791708853415977/acaraje.jpg', '500 gramas', '22'),
    (3, 'Almôndegas ao molho',           'Comida casual',   'Deliciosas almôndegas com molho à escolha',                            
    'https://cdn.discordapp.com/attachments/988224567619244072/1006791889242050611/almondega.jpg', '500 gramas', '25'),
    (4, 'Risotto ao camarão',            'Comida italiana', 'Arroz arbóreo ao molho com camarão',                                   
    'https://cdn.discordapp.com/attachments/988224567619244072/1006791889892151327/risoto-de-camarao.jpg', '400 gramas', '68'),
    (5, 'Filet Mignon ao molho madeira', 'Comida de rico',  'Carne nobre com preço exorbitante',                                    
    'https://cdn.discordapp.com/attachments/988224567619244072/1006791889573396480/file-mignon-ao-molho-madeira.jpg', '250 gramas', '97')`;

function criaTabelaCardapio() {
	db.run(CARDAPIO_SCHEMA, error => {
		if (error) console.log('Erro ao criar tabela de cardápio');
	});
}

function populaTabelaCardapio() {
	db.run(ADD_CARDAPIO_DATA, error => {
		if (error) console.log('Erro ao popular tabela de cardápio');
	});
}

// Criando e populando schema de bebidas

const BEBIDAS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "BEBIDAS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "Nome" VARCHAR(32),
    "Categoria" VARCHAR(32),
    "Descricao" VARCHAR(200),
    "Imagem" VARCHAR(100),
    "Porcao" VARCHAR(20),
    "Preco" INT
)`;

const ADD_BEBIDAS_DATA = `
INSERT INTO BEBIDAS (ID, NOME, CATEGORIA, DESCRICAO, IMAGEM, PORCAO, PRECO)
VALUES
    (1, 'Guaraná Mineiro', 'Refrigerante',    'Deliciosa bebida refrescante', 
    'https://cdn.discordapp.com/attachments/988224567619244072/1006794688520519740/guarana-mineiro.jpeg', '2 litros', '8'),
    (2, 'Coca-Cola',       'Refrigerante',    'Deliciosa bebida refrescante', 
    'https://cdn.discordapp.com/attachments/988224567619244072/1006794864547074099/coca-cola.webp', '2 litros', '7'),
    (3, 'Água de Coco',    'Bebida tropical', 'Água fresca direta do coco',   
    'https://cdn.discordapp.com/attachments/988224567619244072/1006795031593615490/agua-de-coco.jpg', '500 ml', '7'),
    (4, 'Suco de laranja', 'Suco',            'Suco natural de laranja',      
    'https://cdn.discordapp.com/attachments/988224567619244072/1006795177739948082/suco-de-laranja.jpg', '500 ml', '5'),
    (5, 'Caipirinha',      'Bebida alcólica', 'Proibido para menores',        
    'https://cdn.discordapp.com/attachments/988224567619244072/1006795627591639050/caipirinha.webp', '500 ml', '20')`;

function criaTabelaBebidas() {
	db.run(BEBIDAS_SCHEMA, error => {
		if (error) console.log('Erro ao criar tabela de bebidas');
	});
}

function populaTabelaBebidas() {
	db.run(ADD_BEBIDAS_DATA, error => {
		if (error) console.log('Erro ao popular tabela de bebidas');
	});
}

// // Criando e populando schema de pedidos

// const PEDIDOS_SCHEMA = `
// CREATE TABLE IF NOT EXISTS "PEDIDOS" (
//     "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
//     "ID_CLIENTE" INTEGER, FOREIGN KEY (ID_CLIENTE) REFERENCES CLIENTES(ID),
//     "ID_CARDAPIO" INTEGER, FOREIGN KEY (ID_CARDAPIO) REFERENCES CARDAPIO(ID),
//     "ID_BEBIDAS" INTEGER, FOREIGN KEY (ID_BEBIDAS) REFERENCES BEBIDAS(ID)
//   );`;

// function criaTabelaPedidos() {
// 	db.run(PEDIDOS_SCHEMA, error => {
// 		if (error) console.log('Erro ao criar tabela de pedidos');
// 	});
// }

// // Criando e populando schema de mesas

// const MESAS_SCHEMA = `
// CREATE TABLE IF NOT EXISTS "MESAS" (
//     "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
//     "Reserva" BIT NOT NULL DEFAULT 0,
// );`;

// function criaTabelaMesas() {
// 	db.run(MESAS_SCHEMA, error => {
// 		if (error) console.log('Erro ao criar tabela de mesas');
// 	});
// }

db.serialize(() => {
	criaTabelaClientes();
	populaTabelaClientes();
	criaTabelaCardapio();
	populaTabelaCardapio();
	criaTabelaBebidas();
	populaTabelaBebidas();
});
