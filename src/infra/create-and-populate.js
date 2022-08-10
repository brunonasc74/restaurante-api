const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

// Criando e populando schema de clientes

const CLIENTES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CLIENTES" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT
    "Nome" VARCHAR(32),
    "Sobrenome" VARCHAR(32),
    "Email" VARCHAR(64),
    "Telefone" VARCHAR(14),
    "CPF" VARCHAR(14),		
);`;

const ADD_CLIENTES_DATA = `
INSERT INTO USUARIOS (ID, NOME, SOBRENOME, EMAIL, TELEFONE, CPF)
VALUES 
    (1, 'Bruna', 'Xavier', 'brunaxavier@email.com', '(21)91111-1111', '111.111.111-11'),
    (2, 'Bruno', 'Nascimento', 'bruno_nascimento@email.com', '(34)92222-2222', '222.222.222-22'),
    (3, 'Shiellyn', 'Ferreira', 'shiellyn.ferreira@email.com', '(11)93333-3333', '333.333.333-33'),
    (4, 'Kelly', 'Alves', 'alves.kelly@email.com', '(71)94444-4444', '444.444.444-44'),
    (5, 'Artur', 'Rodrigues', 'rod_artur@email.com', '(38)95555-5555', '555.555.555-55'),`;

function criaTabelaClientes() {
    db.run(CLIENTES_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de clientes");
    });
}

// Schema de cardápio

const CARDAPIO_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CARDAPIO" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT
    "Nome" VARCHAR(32),
    "Categoria" VARCHAR(32),
    "Descrição" VARCHAR(200),
    "Imagem" VARCHAR(100),
    "Preço" INT
);`;

function criaTabelaCardapio() {
    db.run(CARDAPIO_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de cardápio");
    });
}

// Schema de bebidas

const BEBIDAS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "BEBIDAS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT
    "Nome" VARCHAR(32),
    "Categoria" VARCHAR(32),
    "Descrição" VARCHAR(200),
    "Imagem" VARCHAR(100),
    "Preço" INT
);`;

function criaTabelaCardapio() {
    db.run(CARDAPIO_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de cardápio");
    });
}

// Schema de pedidos

const PEDIDOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "PEDIDOS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "ID_CLIENTE" INTEGER, FOREIGN KEY (ID_CLIENTE) REFERENCES CLIENTES(ID),
    "ID_CARDAPIO" INTEGER, FOREIGN KEY (ID_CARDAPIO) REFERENCES CARDAPIO(ID),
    "ID_BEBIDAS" INTEGER, FOREIGN KEY (ID_BEBIDAS) REFERENCES BEBIDAS(ID)
  );`;

  function criaTabelaPedidos() {
    db.run(PEDIDOS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de pedidos");
    });
}

// Schema de mesas

const MESAS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "MESAS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "Reserva" BIT NOT NULL DEFAULT 0,		
);`;

function criaTabelaMesas() {
    db.run(MESAS_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de mesas");
    });
}

// Populando tabela

const ADD_USUARIOS_DATA = `
INSERT INTO USUARIOS (ID, NOME, EMAIL, SENHA)
VALUES 
    (1, 'Eugênio Oliveira', 'eugenio.oliveira@bol.com.br', '*******'),
    (2, 'Olívia Ribeiro', 'olivia.ribeiro@gmail.com', '********'),
    (3, 'Mirtes Faria Lima', 'mirtes_fl@yahoo.com', '********')
`




function populaTabelaUsr() {
    db.run(ADD_USUARIOS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de usuários");
    });
}


//==== Tarefas
const TAREFAS_SCHEMA = `
CREATE TABLE IF NOT EXISTS TAREFAS (
    ID INTEGER PRIMARY KEY AUTOINCREMENT, 
    TITULO VARCHAR(64),
    DESCRICAO TEXT,
    STATUS VARCHAR(32),
    DATACRIACAO VARCHAR(32),
    ID_USUARIO INTEGER,
    FOREIGN KEY(ID_USUARIO) REFERENCES USUARIOD(ID)
);`;

const ADD_TAREFAS_DATA = `INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO)
VALUES 
       ('Yoga', 'Fazer yoga segunda e quarta', 'Continuo', '2021-01-10', 2),
       ('Médico', 'Consulta com Dr. Ayrton sexta', 'TODO', '2021-01-13', 1),
       ('Pagar contas', 'Pagar boletos de água e luz', 'DOING', '2021-01-02', 2),
       ('Mercado', 'Pegar lista na geladeira e fazer compras', 'TODO', '2021-01-08', 2),
       ('Dentista', 'Consulta com Dra Andreia sexta', 'TODO', '2021-01-11', 1),
       ('Pagar financiamento carro', 'Pagar parcela do mês do financiamento', 'Contínuo', '2021-01-05', 3)
`

function criaTabelaTarefas() {
    db.run(TAREFAS_SCHEMA, (error)=> {
        if(error) console.log("Erro ao criar tabela de Tarefas");
    });
}


function populaTabelaTarefas() {
    db.run(ADD_TAREFAS_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de Tarefas");
    });
}

db.serialize( ()=> {
    criaTabelaUsr();
    populaTabelaUsr();
    criaTabelaTarefas();
    populaTabelaTarefas();
});